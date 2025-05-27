import clsx from "clsx";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import styles from "@/css/loader.module.css";

type Props = {
  hasFace?: boolean;
};

export default function Loader({hasFace = true}: Props) {
  return (
    <BlurFade
      duration={0.4}
      className="flex flex-col items-center justify-center w-full min-h-full gap-5 pb-6 md:pb-16"
    >
      {hasFace && <div className={styles.loader} />}
      <div className={clsx(styles.loaderText, "dark:text-white")} />
    </BlurFade>
  );
}
