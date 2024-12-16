import {useState} from "react";
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import {MagicCard} from "./magic-card";
import {BorderBeam} from "./border-beam";
import {reduxState} from "@/lib/type";

type Props = {
  image?: any;
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
      className="flex-col !items-stretch h-full mx-auto shadow-2xl rounded-xl !justify-stretch w-72 md:w-80 whitespace-nowrap"
      gradientColor={theme === "dark" ? "#262626" : "#D0D0D0"}
    >
      <img
        loading="lazy"
        className="w-full bg-white shadow-lg aspect-video"
        src={image}
        alt={title}
      />
      <div className="flex flex-col gap-6 px-2.5 py-3 h-full">
        <h4 className="pt-2 pb-1 text-xl text-center md:text-2xl">{title}</h4>
        <div className="flex flex-col justify-between h-full gap-6">
          <p
            className={clsx(
              "text-base flex-wrap flex h-max text-wrap",
              i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
            )}
          >
            {t(`${text}`)}
          </p>
          <div className="flex flex-wrap items-end gap-2 text-sm text-gray-600 h-min dark:text-gray-300">
            {stack?.map((item, index) => (
              <div
                key={index}
                className="border-[1px]  py-0.5 border-transparent px-1 flex items-center rounded-md text-black dark:text-white bg-[#D9D9D9] hover:bg-[#b9b9b9] dark:bg-[#262626] dark:hover:bg-[#161616] duration-200 text-xs"
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
