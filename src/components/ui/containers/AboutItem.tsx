import {useSelector} from "react-redux";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import {reduxState} from "@/lib/type";

type Props = {
  src: string;
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
          "group flex flex-row justify-between items-center gap-4 text-sm md:text-base cursor-pointer",
          i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
        )}
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-white p-1 border border-darkGray group-hover:border-red-600 rounded-full w-12 min-w-12 h-12 min-h-12 object-cover overflow-hidden duration-300">
            <img src={src} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <p className="text-black dark:text-white text-base">
                {upperText}
              </p>
              <div
                className={clsx(
                  "flex items-end pb-0.5 h-full",
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
                  className="lucide-chevron-right opacity-0 group-hover:opacity-100 size-4 rotate-0 transition-all translate-x-0 group-hover:translate-x-1 duration-300 ease-out transform lucide"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {lowerText}
            </p>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{duration}</p>
      </div>
    </a>
  );
}
