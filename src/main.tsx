import React from "react";
import ReactDOM from "react-dom/client";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import enTranslations from "@/localization/enTranslations.json";
import faTranslations from "@/localization/faTranslations.json";
import itTranslations from "@/localization/itTranslations.json";
import spTranslations from "@/localization/spTranslations.json";
import arTranslations from "@/localization/arTranslations.json";

i18n.init({
  lng: "en", // default language
  resources: {
    en: {
      translation: enTranslations,
      dir: "ltr",
    },
    fa: {
      translation: faTranslations,
      dir: "rtl",
    },
    it: {
      translation: itTranslations,
      dir: "ltr",
    },
    es: {
      translation: spTranslations,
      dir: "ltr",
    },
    ar: {
      translation: arTranslations,
      dir: "rtl",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
);
