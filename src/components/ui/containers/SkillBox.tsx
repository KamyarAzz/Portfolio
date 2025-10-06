import {ReactNode} from "react";
import {useTranslation} from "react-i18next";
import {cn} from "@/lib/utils";

type Props = {children: ReactNode; className: string};

export default function SkillBox({children, className}: Props) {
  const {i18n} = useTranslation();

  return (
    <div
      className={cn(
        className,
        "px-3 md:px-4 md:py-2.5 py-1.5 text-black hover:text-white !rounded-md border duration-300 dark:text-white",
        i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
      )}
    >
      {children}
    </div>
  );
}
