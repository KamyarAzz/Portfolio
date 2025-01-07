import {useTranslation} from "react-i18next";
import AboutItem from "@/components/ui/containers/AboutItem";
import Seperator from "@/components/ui/Seperator";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import uniLogo from "@/assets/images/Azad-University-Logo.svg";
import smpLogo from "@/assets/images/smpLogo.svg";
import mftLogo from "@/assets/images/cropped-logo-dark.png";
import harvardLogo from "@/assets/images/Harvard-Logo.png";
import certificateWebDesign1 from "@/assets/images/certificates/mft/certificate-en1.jpg";
import certificateWebDesign2 from "@/assets/images/certificates/mft/certificate-en2.jpg";
import certificateWebDesign3 from "@/assets/images/certificates/mft/certificate-en3.jpg";
import certificatePython from "@/assets/images/certificates/mft/certificate-en.jpeg";
// import ieltsLogo from "@/assets/images/IELTS-logo.png";

export default function About() {
  const {t} = useTranslation();
  return (
    <div className="flex flex-col w-full h-max">
      <BlurFade>
        <Seperator className="!mt-0">{t("education")}</Seperator>
        <div className="flex flex-col gap-6 w-full">
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
        <div className="flex flex-col gap-6 w-full">
          {/* <AboutItem
            href="link to file or website"
            src={ieltsLogo}
            duration="2025"
            upperText="IELTS"
            lowerText="Band Score: 7.5"
          /> */}
          <AboutItem
            href="https://cs50.harvard.edu/certificates/f7428f28-6c90-4333-b907-cc1d22ac4cbc"
            src={harvardLogo}
            duration="2024"
            upperText={t("harvard")}
            lowerText="CS50AI"
          />
          <AboutItem
            href="https://cs50.harvard.edu/certificates/96a6a034-5899-413b-a542-93e7ab6ba2ab"
            src={harvardLogo}
            duration="2024"
            upperText={t("harvard")}
            lowerText="CS50P"
          />
          <AboutItem
            href={certificateWebDesign3}
            src={mftLogo}
            duration="2024"
            upperText={t("mft")}
            lowerText={t("webDesign3")}
          />
          <AboutItem
            href="https://cs50.harvard.edu/certificates/384a58cd-1192-4c5c-a680-42fab56dd884"
            src={harvardLogo}
            duration="2023"
            upperText={t("harvard")}
            lowerText="CS50X"
          />
          <AboutItem
            href={certificateWebDesign2}
            src={mftLogo}
            duration="2022"
            upperText={t("mft")}
            lowerText={t("webDesign2")}
          />
          <AboutItem
            href={certificateWebDesign1}
            src={mftLogo}
            duration="2021"
            upperText={t("mft")}
            lowerText={t("webDesign1")}
          />
          <AboutItem
            href={certificatePython}
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
