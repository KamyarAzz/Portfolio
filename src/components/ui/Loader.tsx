import clsx from "clsx";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import styles from "@/css/loader.module.css";

export default function Loader() {
  return (
    <BlurFade
      duration={0.4}
      className="flex flex-col items-center justify-center w-full min-h-full gap-5 pb-6 md:pb-16"
    >
      <div className={styles.loader} />
      <div className={clsx(styles.loaderText, "dark:text-white")} />
    </BlurFade>
  );
}
