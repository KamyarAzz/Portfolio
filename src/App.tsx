import {useDispatch, useSelector} from "react-redux";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Socials from "./components/socials/Socials";
import {reduxState} from "./lib/type";
import {useEffect} from "react";
import {setIsMobile} from "./redux/isMobileSlice";
import Tooltip from "./components/ui/Tolltip";
import {Navigate, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import {ToastContainer} from "react-toastify";
import {useTranslation} from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // states and hooks
  const theme = useSelector((state: reduxState) => state.theme);
  const dispatch = useDispatch();
  const {i18n} = useTranslation();

  // handle resize
  useEffect(() => {
    const handleResize = () => {
      dispatch(setIsMobile(window.innerWidth <= 768));
    };
    // Listen for window resize events
    window.addEventListener("resize", handleResize);
    // Initial setup
    handleResize();
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.style.setProperty("--scrollbar-bg", "#2c2c2c");
    else root.style.setProperty("--scrollbar-bg", "#fff");
  }, [theme]);

  const tooltip = useSelector((state: reduxState) => state.tooltip);

  return (
    <div className="relative flex flex-col font-[sahel,dirooz,gandom] w-full h-full overflow-hidden bg-lightBg dark:bg-darkBg">
      {tooltip.isVisible && <Tooltip text={tooltip.text} />}
      <ToastContainer
        toastClassName="dark:bg-[#121212] bg-white text-black dark:text-white"
        rtl={i18n.dir(i18n.language) === "rtl" ? true : false}
      />
      <Socials />
      <Header />
      <div className="flex w-full h-full px-4 py-5 overflow-y-auto md:py-10 md:px-20 lg:px-[7.5rem]">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
