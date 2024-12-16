import {ReactNode} from "react";
import clsx from "clsx";
import {useTranslation} from "react-i18next";

type Props = {children: ReactNode; className?: string};

export default function Seperator({children, className}: Props) {
  const {i18n} = useTranslation();

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 w-full mb-6 mt-12 text-black dark:text-white",
        className,
        i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr"
      )}
    >
      <h2 className="text-lg font-semibold">{children}</h2>
      <div className="bg-[#1f1f1f] rounded-full h-0.5"></div>
    </div>
  );
}
