import ContactForm from "@/components/form/ContactForm";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import ContactInfo from "@/components/ui/ContactInfo";
import IconCloud from "@/components/ui/magic_ui/icon-cloud";

export default function Contact() {
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
    <BlurFade className="flex flex-wrap-reverse md:flex-nowrap !justify-center md:justify-between items-start md:gap-16 mx-auto w-full h-max">
      <div className="flex items-center justify-center md:top-0 md:left-0 md:sticky md:mt-24 lg:mt-0 min-w-72">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="flex flex-col gap-6 p-2 md:gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </BlurFade>
  );
}
