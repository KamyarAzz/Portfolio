import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
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
import Tooltip from "./components/ui/Tooltip";
import Footer from "./components/footer/Footer";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import BlogPost from "./components/pages/BlogPost";
import DevPost from "./components/pages/DevPost";
import {setIsMobile} from "./redux/isMobileSlice";
import {reduxState} from "./lib/type";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // states and hooks
  const location = useLocation();
  const theme = useSelector((state: reduxState) => state.theme);
  const dispatch = useDispatch();
  const {i18n} = useTranslation();
  const scrollableRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, [location.pathname]);

  const tooltip = useSelector((state: reduxState) => state.tooltip);

  return (
    <div className="relative flex flex-col bg-lightBg dark:bg-darkBg w-full h-full font-[sahel,dirooz,gandom] overflow-hidden">
      {tooltip.isVisible && <Tooltip text={tooltip.text} />}
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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/dev-post" element={<DevPost />} />
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
