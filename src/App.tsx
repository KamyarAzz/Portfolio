import {useEffect, useRef} from "react";
import {ToastContainer} from "react-toastify";
import {useTranslation} from "react-i18next";
import {Navigate, Route, Routes, useLocation} from "react-router-dom";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/react";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Socials from "./components/socials/Socials";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Devlog from "./components/pages/Devlog";
import BlogPost from "./components/pages/DevlogPost";
import DevPost from "./components/pages/DevEditor";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // states and hooks
  const location = useLocation();
  const {i18n} = useTranslation();
  const scrollableRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <div className="relative flex flex-col bg-lightBg dark:bg-darkBg w-full h-full font-[sahel,dirooz,gandom] overflow-hidden">
      <ToastContainer
        toastClassName="dark:bg-[#121212] bg-white text-black dark:text-white"
        rtl={i18n.dir(i18n.language) === "rtl" ? true : false}
      />
      <Socials />
      <Header />
      <div
        ref={scrollableRef}
        className="flex px-4 md:px-20 lg:px-[7.5rem] md:py-10 pt-8 pb-4 w-full h-full overflow-y-auto"
      >
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/devlog" element={<Devlog />} />
          <Route path="/devlog/:id" element={<BlogPost />} />
          <Route path="/devlog-editor" element={<DevPost />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
