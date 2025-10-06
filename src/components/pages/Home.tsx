import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Button from "@/components/ui/Button";
import Ripple from "@/components/ui/animations/ripple";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import ProfilePicture from "@/components/ui/ProfilePicture";
import {cn} from "@/lib/utils";

export default function Home() {
  const {t, i18n} = useTranslation();
  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate("/contact");
  };

  return (
    <div className="flex flex-col items-center w-full min-h-full text-black md:flex-row-reverse dark:text-white md:justify-center md:gap-16 lg:gap-24 h-max">
      <BlurFade className="z-40">
        <ProfilePicture />
      </BlurFade>
      <BlurFade
        className={cn(
          "flex flex-col gap-3 md:gap-4 md:max-w-[35%]",
          i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
        )}
      >
        <p className="text-lg md:text-xl">{t("welcome")}</p>
        <h1
          className={cn(
            "flex flex-col font-semibold text-4xl text-left md:text-7xl",
            i18n.dir(i18n.language) === "rtl" ? "text-right" : "text-left"
          )}
        >
          {t("name")}
        </h1>
        <div className={cn(i18n.language === "fa" && "mt-4", "flex flex-row")}>
          <p className="text-xl">{t("title1")}&nbsp;</p>
          <p className="text-lg text-red-700 md:text-xl">{t("title2")}&nbsp;</p>
          <p className="text-xl">{t("title3")} </p>
        </div>
        <p className="flex text-base md:text-lg">{t("main")}</p>

        <Button
          onClick={btnClickHandler}
          className="md:my-4 mt-1.5 w-max text-lg md:text-xl"
        >
          {t("contactBtn")}
        </Button>
      </BlurFade>
      <Ripple mainCircleOpacity={100} className="hidden md:flex" />
    </div>
  );
}
