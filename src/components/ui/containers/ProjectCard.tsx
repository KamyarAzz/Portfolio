import {useState} from "react";
import {useTranslation} from "react-i18next";
import {MagicCard} from "@/components/ui/magic_ui/magic-card";
import {BorderBeam} from "@/components/ui/animations/container_animations/border-beam";
import {cn} from "@/lib/utils";

type Props = {
  image?: string;
  title: string;
  url?: string;
  stack?: string[];
  text?: string;
};

export default function ProjectLayout({title, image, stack, text}: Props) {
  const [isHovering, setIsHovering] = useState(false);
  const {t, i18n} = useTranslation();

  return (
    <MagicCard
      setIsHovering={setIsHovering}
      className="flex-col !justify-stretch !items-stretch shadow-2xl  mx-auto rounded-xl w-72 md:w-80 h-full whitespace-nowrap"
      gradientColor="var(--project-background)"
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
            className={cn(
              "flex flex-wrap h-max text-base text-wrap",
              i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
            )}
          >
            {t(`${text}`)}
          </p>
          <div className="flex flex-wrap items-end gap-2 text-sm text-gray-600 h-min dark:text-gray-300">
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
