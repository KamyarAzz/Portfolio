import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {Provider} from "react-redux";
import store from "./redux/store.ts";
import {I18nextProvider} from "react-i18next";
import i18n from "i18next";
import enTranslations from "@/features/enTranslations.json";
import faTranslations from "@/features/faTranslations.json";
import itTranslations from "@/features/itTranslations.json";
import spTranslations from "@/features/spTranslations.json";
import arTranslations from "@/features/arTranslations.json";

import {BrowserRouter} from "react-router-dom";

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
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  </React.StrictMode>
);