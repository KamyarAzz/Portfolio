import {useSelector} from "react-redux";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {reduxState} from "@/lib/type";

type Props = {
  src: any;
  duration: string;
  upperText: string;
  lowerText: string;
  href: string;
};

export default function AboutItem({
  src,
  duration,
  lowerText,
  upperText,
  href,
}: Props) {
  const theme = useSelector((state: reduxState) => state.theme);
  const {i18n} = useTranslation();

  return (
    <a href={href} target="_blank">
      <div
        className={clsx(
          "flex flex-row items-center justify-between gap-4 text-sm cursor-pointer group md:text-base",
          i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
        )}
      >
        <div className="flex gap-2">
          <div className="flex bg-white p-1 items-center justify-center duration-300 group-hover:border-red-600 object-cover w-12 h-12 min-h-12 min-w-12 overflow-hidden border-[1px] rounded-full border-[#1f1f1f]">
            <img src={src} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <p className="text-base text-black dark:text-white">
                {upperText}
              </p>
              <div
                className={clsx(
                  "flex items-end h-full pb-0.5",
                  i18n.dir(i18n.language) === "rtl" ? "rotate-180" : ""
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={theme === "light" ? "black" : "white"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 ease-out transform rotate-0 translate-x-0 opacity-0 lucide lucide-chevron-right size-4 group-hover:translate-x-1 group-hover:opacity-100"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {lowerText}
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{duration}</p>
      </div>
    </a>
  );
}
