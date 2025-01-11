import ContactForm from "@/components/form/ContactForm";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import ContactInfo from "@/components/ui/ContactInfo";
import IconCloud from "@/components/ui/magic_ui/icon-cloud";
import {reduxState} from "@/lib/type";
import {useSelector} from "react-redux";

export default function Contact() {
  const theme = useSelector((state: reduxState) => state.theme);
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "vite",
    "webpack",
    "git",
    "npm",
    "html5",
    "css3",
    "nodedotjs",
    "sass",
    "tailwindcss",
    "bootstrap",
    "reactrouter",
    "reactquery",
    "redux",
    "reacthookform",
    "zod",
    "github",
    "visualstudiocode",
    "figma",
  ];

  return (
    <BlurFade className="flex flex-wrap md:flex-nowrap !justify-center md:justify-between items-center gap-16 mx-auto w-full h-max">
      <div className="md:flex hidden">
        <IconCloud iconSlugs={slugs} theme={theme} />
      </div>
      <div className="flex flex-col gap-6 md:gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </BlurFade>
  );
}
