import ProjectLayout from "@/components/ui/containers/ProjectCard";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import stockGif from "@/assets/gifs/stockManagement.gif";
import nftGif from "@/assets/gifs/nftMarketPlace.gif";
import alibabaCloneGif from "@/assets/gifs/alibabaClone.gif";
import restaurantGif from "@/assets/gifs/restaurantMenu.gif";
import housingGif from "@/assets/gifs/housingCorporation.gif";
import acv6Gif from "@/assets/gifs/accessControl.gif";
import studentGif from "@/assets/gifs/studentJob.gif";
import dinningGif from "@/assets/gifs/viunaDinning.gif";
import weatherGif from "@/assets/gifs/weather.gif";
import smpGif from "@/assets/gifs/smp.gif";
import viunaCardGif from "@/assets/gifs/viunaCard.gif";
import viunaGif from "@/assets/gifs/viuna.gif";

const projectsList = [
  {
    title: "Viuna Dinning",
    text: "dinning",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router",
      "React Query",
    ],
    image: dinningGif,
  },
  {
    title: "Viuna Access Control",
    text: "acv6",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "React Router",
      "StimulSoft",
    ],
    image: acv6Gif,
  },
  {
    title: "Viuna Student Job",
    text: "studentJob",
    stack: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "Chart.js",
      "Quill",
      "i18next",
    ],
    image: studentGif,
  },
  {
    title: "Housing Corporation",
    text: "housing",
    stack: ["React", "TailwindCSS", "Redux Toolkit"],
    image: housingGif,
  },
  {
    title: "Stock Management",
    text: "stock",
    stack: ["HTML", "CSS", "JavaScript"],
    image: stockGif,
  },
  {
    title: "NFT Marketplace",
    text: "nft",
    stack: ["HTML", "CSS", "JavaScript", "Sass"],
    image: nftGif,
  },
  {
    title: "Viuna Card",
    text: "acv7",
    stack: ["Next.js", "Axios", "Tanstack Query", "TailwindCSS", "TypeScript"],
    image: viunaCardGif,
  },
  {
    title: "Viuna Website",
    text: "viuna",
    stack: [
      "React",
      "React Router",
      "React Query",
      "TailwindCSS",
      "TypeScript",
      "CSS",
    ],
    image: viunaGif,
  },
  {
    title: "Saman Madar Pars Website",
    text: "smpProj",
    stack: [
      "React",
      "React Router",
      "React Query",
      "TailwindCSS",
      "TypeScript",
      "CSS",
    ],
    image: smpGif,
  },
  {
    title: "Restaurant Menu",
    text: "restaurant",
    stack: ["React", "React Router", "TypeScript", "CSS"],
    image: restaurantGif,
  },
  {
    title: "Weather Insight",
    text: "weather",
    stack: ["React", "TailwindCSS", "TypeScript", "CSS"],
    image: weatherGif,
  },
  {
    title: "Alibaba Clone",
    text: "alibaba",
    stack: ["HTML", "CSS", "JavaScript"],
    image: alibabaCloneGif,
  },
];

export default function Projects() {
  return (
    <div className="grid items-stretch w-full grid-cols-1 gap-10 justify-stretch md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 h-max">
      {projectsList.map((project, index) => (
        <BlurFade key={project.title} delay={+`0.${index}`}>
          <ProjectLayout
            title={project.title}
            text={project.text}
            stack={project.stack}
            image={project.image}
          />
        </BlurFade>
      ))}
    </div>
  );
}
