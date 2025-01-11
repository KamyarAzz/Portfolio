import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Link, useLocation} from "react-router-dom";
import clsx from "clsx";
import {setTheme} from "@/redux/themeSlice";
import {reduxState} from "@/lib/type";
import americaFlag from "@/assets/images/flags/united states 1.svg";
import iranFlag from "@/assets/images/flags/iran 1.svg";
import arabicFlag from "@/assets/images/flags/saudi arabia 1.svg";
import italianFlag from "@/assets/images/flags/italy.svg";
import spanishFlag from "@/assets/images/flags/spain 1.svg";
import {setTooltip} from "@/redux/tooltipSlice";
import englishCV from "@/assets/resume/Kamyar Azizi - Resume.pdf";
import farsiCV from "@/assets/resume/رزومه کامیار عزیزی.pdf";

type TFlag = {
  name: string;
  src: string;
  value: string;
};

const flags: TFlag[] = [
  {
    name: "English",
    src: americaFlag,
    value: "en",
  },
  {
    name: "Farsi",
    src: iranFlag,
    value: "fa",
  },
  {
    name: "Italian",
    src: italianFlag,
    value: "it",
  },
  {
    name: "Spanish",
    src: spanishFlag,
    value: "es",
  },
  {
    name: "Arabic",
    src: arabicFlag,
    value: "ar",
  },
];

export default function Header() {
  const [isHovering, setIsHovering] = useState({
    firstSVG: false,
    secondSVG: false,
    thirdSVG: false,
    menuSVG: false,
  });

  const [openCV, setOpenCV] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [availableLangs, setAvailableLangs] = useState<TFlag[]>(flags.slice(1));
  const [currentLang, setCurrentLang] = useState<TFlag>(flags[0]);
  const cvRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newLangs = flags.filter((flag) => flag.value !== currentLang.value);
    setAvailableLangs(newLangs);
  }, [currentLang]);

  const location = useLocation();

  useEffect(() => {
    setIsHovering({
      firstSVG: false,
      secondSVG: false,
      thirdSVG: false,
      menuSVG: false,
    });
  }, []);

  const addHover = (state: string) => {
    setIsHovering({
      firstSVG: state === "first" ? true : false,
      secondSVG: state === "second" ? true : false,
      thirdSVG: state === "third" ? true : false,
      menuSVG: state === "menu" ? true : false,
    });
  };

  const removeHover = () => {
    setIsHovering({
      firstSVG: false,
      secondSVG: false,
      thirdSVG: false,
      menuSVG: false,
    });
  };

  const dispatch = useDispatch();
  const theme = useSelector((state: reduxState) => state.theme);

  const {t, i18n} = useTranslation();
  const setDarkMode = () => {
    const root = document.getElementById("root");
    if (root) root.classList.add("dark");
    dispatch(setTheme("dark"));
  };

  const setLightMode = () => {
    const root = document.getElementById("root");
    if (root) root.classList.remove("dark");
    dispatch(setTheme("light"));
  };

  const setLanguageValue = (lang: string) => {
    i18n.changeLanguage(lang);
    const newFlag = flags.find((flag) => flag.value === lang);
    if (newFlag) {
      setCurrentLang(newFlag);
      setOpenLang(false);
      dispatch(setTooltip({isVisible: false, text: ""}));
    }
  };

  useEffect(() => {
    removeHover();
  }, [theme]);

  const switchCV = () => {
    setOpenCV(!openCV);
  };

  const switchLang = () => {
    setOpenLang(!openLang);
    dispatch(setTooltip({isVisible: false, text: ""}));
  };

  const enterHoverHandler = (text: string) => {
    if (openLang) dispatch(setTooltip({isVisible: true, text: text}));
  };

  const exitHoverHandler = () => {
    dispatch(setTooltip({isVisible: false, text: ""}));
  };

  useEffect(() => {
    if (openCV) {
      function handleClickOutside(event: MouseEvent) {
        if (cvRef.current && !cvRef.current.contains(event.target as Node)) {
          setOpenCV(false);
        }
      }
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [openCV]);

  useEffect(() => {
    if (openLang) {
      function handleClickOutside(event: MouseEvent) {
        if (
          langRef.current &&
          !langRef.current.contains(event.target as Node)
        ) {
          setOpenLang(false);
        }
      }
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [openLang]);

  return (
    <header
      className="top-0 z-50 sticky flex flex-row justify-between bg-[#FEFAF6] dark:bg-darkBg px-4 md:px-8 py-1.5 md:py-3 w-full text-black dark:text-white"
      style={{
        boxShadow: `0px 2px 8px ${theme === "dark" ? "#1e1e1e" : "#ddd"}`,
      }}
    >
      <Link to="/home">
        <h1 className="flex items-end text-2xl md:text-2xl">
          <span className="text-red-700 cursor-pointer">{"</"}</span>
          <span className="font-bold cursor-pointer">{"Kamyar"}</span>
          <span className="text-red-700 cursor-pointer">{">"}</span>
        </h1>
      </Link>
      <nav
        className={clsx(
          "md:flex flex-grow justify-center items-end gap-5 hidden text-lg list-none",
          i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
        )}
      >
        <Link
          to="/home"
          className={clsx(
            "border-b-[1px] hover:text-red-700 cursor-pointer",
            location.pathname === "/home"
              ? "border-red-700"
              : "border-transparent"
          )}
        >
          {t("home")}
        </Link>
        <Link
          to="/about"
          className={clsx(
            "border-b-[1px] hover:text-red-700 cursor-pointer",
            location.pathname === "/about"
              ? "border-red-700"
              : "border-transparent"
          )}
        >
          {t("menu1")}
        </Link>
        <Link
          to="/skills"
          className={clsx(
            "border-b-[1px] hover:text-red-700 cursor-pointer",
            location.pathname === "/skills"
              ? "border-red-700"
              : "border-transparent"
          )}
        >
          {t("menu2")}
        </Link>
        <Link
          to="/projects"
          className={clsx(
            "border-b-[1px] hover:text-red-700 cursor-pointer",
            location.pathname === "/projects"
              ? "border-red-700"
              : "border-transparent"
          )}
        >
          {t("projects")}
        </Link>
        <Link
          to="/contact"
          className={clsx(
            "border-b-[1px] hover:text-red-700 cursor-pointer",
            location.pathname === "/contact"
              ? "border-red-700"
              : "border-transparent"
          )}
        >
          {t("menu3")}
        </Link>
      </nav>
      <div className="flex flex-row justify-end items-end gap-3 md:gap-4 text-lg">
        <div
          ref={langRef}
          className="relative flex flex-col items-center w-8 h-8 cursor-pointer"
          title={t("sideMenu1")}
        >
          <img
            src={currentLang.src}
            alt={currentLang.name}
            onClick={switchLang}
            className="z-50 w-full h-full transition-transform"
          />
          <div
            className={`absolute -top-1.5 w-full bg-lightBg dark:bg-[#303030] pb-3 rounded-full pt-14 px-5 transition-all duration-300 ease-in-out transform ${
              openLang
                ? "h-[250px] opacity-100 scale-100"
                : "h-0 opacity-0 scale-95 "
            }`}
            style={{
              boxShadow: `0px 0px 3px ${
                theme === "dark" ? "#0c0c0c" : "#cccccc"
              } inset`,
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col justify-center items-center gap-5">
              {availableLangs.map((flag: TFlag) => (
                <img
                  onMouseEnter={() => enterHoverHandler(flag.name)}
                  onMouseLeave={() => exitHoverHandler()}
                  className="min-w-8 min-h-8"
                  key={flag.name}
                  src={flag.src}
                  alt={flag.name}
                  onClick={() => setLanguageValue(flag.value)}
                />
              ))}
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center w-8 h-8"
          title={t("sideMenu2")}
        >
          {theme === "light" ? (
            <svg
              onClick={setDarkMode}
              className="transition-transform duration-100 cursor-pointer hover:-rotate-12"
              onMouseEnter={() => addHover("first")}
              onMouseLeave={removeHover}
              fill={isHovering.firstSVG ? "#b91c1c" : "black"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M371.1 13.1c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.8c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3c-3.1 4.5-3.7 10.2-1.6 15.2s6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9L391 391l107.9-19.8c5.3-1 9.8-4.6 11.9-9.6s1.5-10.7-1.6-15.2L446.9 256l62.3-90.3c3.1-4.5 3.7-10.2 1.6-15.2s-6.6-8.6-11.9-9.6L391 121 371.1 13.1zM265.1 97.7l79.1-54.5 17.4 94.5c1.2 6.5 6.3 11.6 12.8 12.8l94.5 17.4-54.5 79.1c-3.8 5.5-3.8 12.7 0 18.2l54.5 79.1-94.5 17.4c-6.5 1.2-11.6 6.3-12.8 12.8l-17.4 94.5-79.1-54.5c-5.5-3.8-12.7-3.8-18.2 0l-79.1 54.5-17.4-94.5c-1.2-6.5-6.3-11.6-12.8-12.8L43.2 344.1l54.5-79.1c3.8-5.5 3.8-12.7 0-18.2L43.2 167.8l94.5-17.4c6.5-1.2 11.6-6.3 12.8-12.8l17.4-94.5 79.1 54.5c5.5 3.8 12.7 3.8 18.2 0zM256 384a128 128 0 1 0 0-256 128 128 0 1 0 0 256zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
            </svg>
          ) : (
            <svg
              onClick={setLightMode}
              className="transition-transform duration-100 cursor-pointer hover:-rotate-12"
              onMouseEnter={() => addHover("first")}
              onMouseLeave={removeHover}
              fill={isHovering.firstSVG ? "#b91c1c" : "white"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M190.6 66.8c-38.8 37.8-62.9 90.7-62.9 149.2c0 108.9 83.5 198.3 189.9 207.3C289.8 439 257.7 448 223.5 448C117.7 448 32 362.1 32 256c0-94.8 68.5-173.5 158.6-189.2zm66.1-21.5c-1.5-6.9-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3z" />
            </svg>
          )}
        </div>
        <div
          className="relative flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          title={t("sideMenu3")}
          ref={cvRef}
        >
          <svg
            onClick={switchCV}
            className="z-50 min-h-6 transition-transform duration-100 hover:-rotate-12"
            onMouseEnter={() => addHover("third")}
            onMouseLeave={removeHover}
            fill={
              isHovering.thirdSVG
                ? "#b91c1c"
                : theme === "light"
                ? "black"
                : "white"
            }
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={25}
            height={25}
          >
            <path d="M320 480H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32H192V144c0 26.5 21.5 48 48 48H352V448c0 17.7-14.3 32-32 32zM240 160c-8.8 0-16-7.2-16-16V32.5c2.8 .7 5.4 2.1 7.4 4.2L347.3 152.6c2.1 2.1 3.5 4.6 4.2 7.4H240zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V163.9c0-12.7-5.1-24.9-14.1-33.9L254.1 14.1c-9-9-21.2-14.1-33.9-14.1H64zM208 240c0-8.8-7.2-16-16-16s-16 7.2-16 16V361.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L208 361.4V240z" />
          </svg>
          <div
            className={`absolute -top-1.5 w-full bg-lightBg dark:bg-[#303030] pb-3 rounded-full pt-14 px-5 transition-all duration-300 ease-in-out transform ${
              openCV
                ? "h-[140px] opacity-100 scale-100"
                : "h-0 opacity-0 scale-95 "
            }`}
            style={{
              boxShadow: `0px 0px 3px ${
                theme === "dark" ? "#0c0c0c" : "#cccccc"
              } inset`,
              overflow: "hidden",
            }}
          >
            <div className="flex flex-col justify-center items-center gap-5">
              <a
                onClick={() => setOpenCV(false)}
                href={englishCV}
                target="_blank"
              >
                <p className="hover:text-red-700">En</p>
              </a>
              <a
                onClick={() => setOpenCV(false)}
                href={farsiCV}
                target="_blank"
              >
                <p className="hover:text-red-700">Fa</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
