import ContactForm from "@/components/form/ContactForm";
import BlurFade from "@/components/ui/blur-fade";
import ContactInfo from "@/components/ui/ContactInfo";
import IconCloud from "@/components/ui/icon-cloud";

export default function Contact() {
  const slugs = [
    "typescript",
    "javascript",
    "react",
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
    <BlurFade className="flex flex-wrap items-center gap-16 !justify-center w-full mx-auto md:flex-nowrap md:justify-between">
      <div className="hidden md:flex">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="flex flex-col gap-6 md:gap-10">
        <ContactForm />
        <ContactInfo />
      </div>
    </BlurFade>
  );
}
