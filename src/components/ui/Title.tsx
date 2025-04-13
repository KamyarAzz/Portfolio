import {ReactNode} from "react";

type Props = {children: ReactNode};

export default function Title({children}: Props) {
  return (
    <div className="my-8 text-2xl text-center">
      <span className="text-mainRed">{`</`}</span>
      <span className="text-black dark:text-white">{children}</span>
      <span className="text-mainRed">{`>`}</span>
    </div>
  );
}
