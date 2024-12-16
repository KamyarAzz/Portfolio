import {useSelector} from "react-redux";
import {Link, useLocation} from "react-router-dom";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {reduxState} from "@/lib/type";

export default function Footer() {
  const theme = useSelector((state: reduxState) => state.theme);
  const location = useLocation();
  const {t, i18n} = useTranslation();
  return (
    <footer
      className={clsx(
        "bottom-0 sticky flex justify-between md:hidden bg-[#FEFAF6] dark:bg-darkBg px-4 py-1.5 w-full text-black text-xs dark:text-white",
        i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
      )}
      style={{
        boxShadow: `0px 2px 8px ${theme === "dark" ? "#1e1e1e" : "#ddd"}`,
      }}
    >
      <Link
        to="/home"
        className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
      >
        <svg
          fill={
            location.pathname !== "/home"
              ? "gray"
              : theme === "dark"
              ? "white"
              : "black"
          }
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
        <p
          className={clsx(
            "text-center text-xs",
            location.pathname !== "/home" && "text-[#808080]"
          )}
        >
          {t("home")}
        </p>
      </Link>
      <Link
        to="/about"
        className="flex flex-col justify-center items-center cursor-pointer"
      >
        <svg
          fill={
            location.pathname !== "/about"
              ? "gray"
              : theme === "dark"
              ? "white"
              : "black"
          }
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
        <p
          className={clsx(
            "text-center text-xs",
            location.pathname !== "/about" && "text-[#808080]"
          )}
        >
          {t("menu1")}
        </p>
      </Link>
      <Link
        to="/skills"
        className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
      >
        <svg
          fill={
            location.pathname !== "/skills"
              ? "gray"
              : theme === "dark"
              ? "white"
              : "black"
          }
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
        </svg>
        <p
          className={clsx(
            "text-center text-xs",
            location.pathname !== "/skills" && "text-[#808080]"
          )}
        >
          {t("menu2")}
        </p>
      </Link>
      <Link
        to="/projects"
        className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
      >
        <svg
          fill={
            location.pathname !== "/projects"
              ? "gray"
              : theme === "dark"
              ? "white"
              : "black"
          }
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z" />
        </svg>
        <p
          className={clsx(
            "text-center text-xs",
            location.pathname !== "/projects" && "text-[#808080]"
          )}
        >
          {t("projects")}
        </p>
      </Link>
      <Link
        to="/contact"
        className="flex flex-col justify-center items-center gap-0.5 cursor-pointer"
      >
        <svg
          fill={
            location.pathname !== "/contact"
              ? "gray"
              : theme === "dark"
              ? "white"
              : "black"
          }
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L96 0zM208 288l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64z" />
        </svg>
        <p
          className={clsx(
            "text-center text-xs",
            location.pathname !== "/contact" && "text-[#808080]"
          )}
        >
          {t("menu3")}
        </p>
      </Link>
    </footer>
  );
}
