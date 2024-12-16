import {useTranslation} from "react-i18next";
import AboutItem from "@/components/ui/AboutItem";
import Seperator from "@/components/ui/Seperator";
import BlurFade from "@/components/ui/blur-fade";
import uniLogo from "@/assets/images/Azad-University-Logo.svg";
import smpLogo from "@/assets/images/smpLogo.svg";
import mftLogo from "@/assets/images/cropped-logo-dark.png";
import harvardLogo from "@/assets/images/Harvard-Logo.png";
import certificate1 from "@/assets/images/certificates/mft/certificate-en1.jpg";
import certificate2 from "@/assets/images/certificates/mft/certificate-en2.jpg";
import certificate3 from "@/assets/images/certificates/mft/certificate-en3.jpg";
import certificate4 from "@/assets/images/certificates/cs50/CS50x.pdf";
import certificate5 from "@/assets/images/certificates/cs50/CS50p.pdf";
import certificate6 from "@/assets/images/certificates/mft/certificate-en.jpeg";
import certificate7 from "@/assets/images/certificates/cs50/CS50ai.pdf";

export default function About() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col w-full h-max">
      <BlurFade>
        <Seperator className="!mt-0">{t("education")}</Seperator>
        <div className="flex flex-col w-full gap-6">
          <AboutItem
            href="https://iau.ir/"
            src={uniLogo}
            duration={`2024 - ${t("current")}`}
            upperText={t("uni")}
            lowerText={t("master")}
          />
          <AboutItem
            href="https://iau.ir/"
            src={uniLogo}
            duration="2019 - 2023"
            upperText={t("uni")}
            lowerText={t("bachelor")}
          />
        </div>
      </BlurFade>
      <BlurFade delay={0.2}>
        <Seperator>{t("work")}</Seperator>
        <AboutItem
          href="https://www.samanmadar.com/"
          src={smpLogo}
          duration={`2023 - ${t("current")}`}
          upperText={t("smp")}
          lowerText={t("frontend")}
        />
      </BlurFade>
      <BlurFade delay={0.4}>
        <Seperator>{t("certificates")}</Seperator>
        <div className="flex flex-col w-full gap-6">
          <AboutItem
            href={certificate7}
            src={harvardLogo}
            duration="2024"
            upperText={t("harvard")}
            lowerText="CS50AI"
          />
          <AboutItem
            href={certificate5}
            src={harvardLogo}
            duration="2024"
            upperText={t("harvard")}
            lowerText="CS50P"
          />
          <AboutItem
            href={certificate3}
            src={mftLogo}
            duration="2024"
            upperText={t("mft")}
            lowerText={t("webDesign3")}
          />
          <AboutItem
            href={certificate4}
            src={harvardLogo}
            duration="2023"
            upperText={t("harvard")}
            lowerText="CS50X"
          />
          <AboutItem
            href={certificate2}
            src={mftLogo}
            duration="2022"
            upperText={t("mft")}
            lowerText={t("webDesign2")}
          />
          <AboutItem
            href={certificate1}
            src={mftLogo}
            duration="2021"
            upperText={t("mft")}
            lowerText={t("webDesign1")}
          />
          <AboutItem
            href={certificate6}
            src={mftLogo}
            duration="2020"
            upperText={t("mft")}
            lowerText={t("pwp")}
          />
        </div>
      </BlurFade>
    </div>
  );
}
