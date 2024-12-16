import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import {reduxState} from "@/lib/type";
import Button from "@/components/ui/Button";
import Ripple from "@/components/ui/ripple";
import BlurFade from "@/components/ui/blur-fade";
import ProfilePicture from "@/components/ui/ProfilePicture";

export default function Home() {
  const theme = useSelector((state: reduxState) => state.theme);
  const {t, i18n} = useTranslation();
  const navigate = useNavigate();

  const btnClickHandler = () => {
    navigate("/contact");
  };

  return (
    <div
      className={clsx(
        "flex md:flex-row-reverse flex-col items-center md:justify-center md:gap-16 lg:gap-24",
        theme === "light" ? "text-black" : "text-white"
      )}
    >
      <BlurFade>
        <ProfilePicture />
      </BlurFade>
      <BlurFade
        className={clsx(
          "flex flex-col gap-3 md:gap-4 md:max-w-[35%]",
          i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
        )}
      >
        <p className="text-lg md:text-xl">{t("welcome")}</p>
        <h1
          className={clsx(
            "flex flex-col text-4xl font-semibold text-left md:text-7xl",
            i18n.dir(i18n.language) === "rtl" ? "text-right" : "text-left"
          )}
        >
          {t("name")}
        </h1>
        <div className={`flex flex-row ${i18n.language === "fa" && "mt-4"}`}>
          <p className="text-xl">{t("title1")}&nbsp;</p>
          <p className="text-lg text-red-700 md:text-xl">{t("title2")}&nbsp;</p>
          <p className="text-xl">{t("title3")} </p>
        </div>
        <p className="flex text-base md:text-lg">{t("main")}</p>

        <Button
          onClick={btnClickHandler}
          className="my-1.5 md:my-4 mb-4 w-max text-lg md:text-xl"
        >
          {t("contactBtn")}
        </Button>
      </BlurFade>
      <Ripple mainCircleOpacity={100} className="hidden md:flex" />
    </div>
  );
}
