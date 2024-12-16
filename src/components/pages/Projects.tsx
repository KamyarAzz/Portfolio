import ProjectLayout from "@/components/ui/ProjectLayout";
import BlurFade from "@/components/ui/blur-fade";
import stockGif from "@/assets/gifs/stockGif.gif";
import nftGif from "@/assets/gifs/nftGif.gif";
import alibabaCloneGif from "@/assets/gifs/alibabaCloneGif.gif";
import restaurantGif from "@/assets/gifs/restaurantGif.gif";
import housingGif from "@/assets/gifs/housingGif.gif";
import acv6Gif from "@/assets/gifs/acv6Gif.gif";
import studentGif from "@/assets/gifs/studentGif.gif";
import dinningGif from "@/assets/gifs/dinningGif.gif";

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
    title: "Restaurant Menu",
    text: "restaurant",
    stack: ["HTML", "CSS", "JavaScript"],
    image: restaurantGif,
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
    <div className="grid items-stretch w-full grid-cols-1 gap-10 h-max justify-stretch md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
