import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import {MagicCard} from "../magic_ui/magic-card";
import {BorderBeam} from "../animations/container_animations/border-beam";
import {reduxState} from "@/lib/type";

type Props = {
  image?: string;
  title: string;
  url?: string;
  stack?: string[];
  text?: string;
};

export default function ProjectLayout({title, image, stack, text}: Props) {
  const theme = useSelector((state: reduxState) => state.theme);
  const [isHovering, setIsHovering] = useState(false);
  const {t, i18n} = useTranslation();

  return (
    <MagicCard
      setIsHovering={setIsHovering}
      className="flex-col !justify-stretch !items-stretch shadow-2xl mx-auto rounded-xl w-72 md:w-80 h-full whitespace-nowrap"
      gradientColor={theme === "dark" ? "#262626" : "#D0D0D0"}
    >
      <img
        loading="lazy"
        className="bg-white shadow-lg w-full aspect-video"
        src={image}
        alt={title}
      />
      <div className="flex flex-col gap-6 px-2.5 py-3 h-full">
        <h4 className="pt-2 pb-1 text-xl md:text-2xl text-center">{title}</h4>
        <div className="flex flex-col justify-between gap-6 h-full">
          <p
            className={clsx(
              "flex flex-wrap h-max text-base text-wrap",
              i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
            )}
          >
            {t(`${text}`)}
          </p>
          <div className="flex flex-wrap items-end gap-2 h-min text-gray-600 dark:text-gray-300 text-sm">
            {stack?.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-[#D9D9D9] hover:bg-[#b9b9b9] dark:bg-[#262626] dark:hover:bg-[#161616] px-1 py-0.5 border- border-transparent rounded-md text-black dark:text-white text-xs duration-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      {isHovering && (
        <BorderBeam
          colorFrom="#b91c1c"
          colorTo="#ef4444"
          size={250}
          duration={8}
          delay={0}
          borderWidth={2}
        />
      )}
    </MagicCard>
  );
}
