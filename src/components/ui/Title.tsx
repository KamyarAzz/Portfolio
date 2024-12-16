import {ReactNode} from "react";
import {useSelector} from "react-redux";
import {reduxState} from "@/lib/type";

type Props = {children: ReactNode};

export default function Title({children}: Props) {
  const theme = useSelector((state: reduxState) => state.theme);
  return (
    <div className="my-8 text-2xl text-center">
      <span className="text-mainRed">{`</`}</span>
      <span className={theme === "dark" ? "text-white" : "text-black"}>
        {children}
      </span>
      <span className="text-mainRed">{`>`}</span>
    </div>
  );
}
