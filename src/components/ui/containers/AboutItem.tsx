import {useTranslation} from "react-i18next";
import {cn} from "@/lib/utils";

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
  const {i18n} = useTranslation();

  return (
    <a href={href} target="_blank">
      <div
        className={cn(
          "group flex flex-row justify-between items-center gap-4 text-sm md:text-base cursor-pointer",
          i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
        )}
      >
        <div className="flex gap-2">
          <div className="flex items-center justify-center object-cover w-12 h-12 p-1 overflow-hidden duration-300 bg-white border rounded-full border-darkGray group-hover:border-red-600 min-w-12 min-h-12">
            <img src={src} className="w-full h-full" />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1.5">
              <p className="text-base text-black dark:text-white">
                {upperText}
              </p>
              <div
                className={cn(
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-300 ease-out transform rotate-0 translate-x-0 opacity-0 lucide-chevron-right stroke-black dark:stroke-white group-hover:opacity-100 size-4 group-hover:translate-x-1 lucide"
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
