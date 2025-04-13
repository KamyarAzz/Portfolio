import {useTranslation} from "react-i18next";
import clsx from "clsx";
import ScrollAnimation from "@/components/ui/animations/SkillsAnimation";
import Seperator from "@/components/ui/Seperator";
import SkillBox from "@/components/ui/containers/SkillBox";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import "@/css/animations.css";

export default function Skills() {
  const {t, i18n} = useTranslation();
  return (
    <BlurFade className="flex flex-col items-center gap-5 md:gap-0 w-full h-max">
      <div className="hidden md:flex justify-center items-center w-full">
        <ScrollAnimation />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <Seperator className="!mt-0 md:!mt-12">
          <span className="text-green-600">•</span> {t("coreTech")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-green-600 border-green-600">
            HTML
          </SkillBox>
          <SkillBox className="hover:bg-green-600 border-green-600">
            CSS
          </SkillBox>
          <SkillBox className="hover:bg-green-600 border-green-600">
            JavaScript
          </SkillBox>
          <SkillBox className="hover:bg-green-600 border-green-600">
            TypeScript
          </SkillBox>
          <SkillBox className="hover:bg-green-600 border-green-600">
            React
          </SkillBox>
          <SkillBox className="hover:bg-green-600 border-green-600">
            Next.js
          </SkillBox>
        </div>
        <Seperator>
          <span className="text-yellow-500">•</span> {t("advancedTools")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-yellow-500 border-yellow-500">
            Redux Toolkit
          </SkillBox>
          <SkillBox className="hover:bg-yellow-500 border-yellow-500">
            React Query
          </SkillBox>
          <SkillBox className="hover:bg-yellow-500 border-yellow-500">
            React Router
          </SkillBox>
          <SkillBox className="hover:bg-yellow-500 border-yellow-500">
            Axios
          </SkillBox>
        </div>
        <Seperator>
          <span className="text-purple-500">•</span> {t("formValidation")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-purple-500 border-purple-500">
            React Hook Form
          </SkillBox>
          <SkillBox className="hover:bg-purple-500 border-purple-500">
            Formik
          </SkillBox>
          <SkillBox className="hover:bg-purple-500 border-purple-500">
            Zod
          </SkillBox>
          <SkillBox className="hover:bg-purple-500 border-purple-500">
            Yup
          </SkillBox>
        </div>
        <Seperator>
          <span className="text-blue-500">•</span> {t("ui")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 pb-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Tailwind
          </SkillBox>
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Bootstrap
          </SkillBox>
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Sass
          </SkillBox>
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Material UI
          </SkillBox>
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Framer Motion
          </SkillBox>
          <SkillBox className="hover:bg-blue-500 border-blue-500">
            Chart.js
          </SkillBox>
        </div>
        <Seperator>
          <span className="text-rose-700">•</span> {t("devTools")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-rose-700 border-rose-700">npm</SkillBox>
          <SkillBox className="hover:bg-rose-700 border-rose-700">
            Vite
          </SkillBox>
          <SkillBox className="hover:bg-rose-700 border-rose-700">
            Webpack
          </SkillBox>
          <SkillBox className="hover:bg-rose-700 border-rose-700">Git</SkillBox>
          <SkillBox className="hover:bg-rose-700 border-rose-700">
            GitHub
          </SkillBox>
        </div>
        <Seperator>
          <span className="text-gray-600">•</span> {t("backend")}
        </Seperator>
        <div
          className={clsx(
            "flex flex-wrap justify-start gap-4 w-full",
            i18n.dir(i18n.language) === "rtl" ? "flex-row-reverse" : "flex-row"
          )}
        >
          <SkillBox className="hover:bg-gray-600 border-gray-600">
            Node.js
          </SkillBox>
          <SkillBox className="hover:bg-gray-600 border-gray-600">
            Express
          </SkillBox>
        </div>
      </div>
    </BlurFade>
  );
}
