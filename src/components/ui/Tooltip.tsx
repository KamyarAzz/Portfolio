import {useState, useEffect} from "react";
import BlurFade from "./animations/container_animations/blur-fade";

type Props = {
  text: string;
  offsetX?: number;
  offsetY?: number;
};

const Tooltip = ({text, offsetX = +25, offsetY = -10}: Props) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const followerStyle: React.CSSProperties = {
    position: "fixed",
    top: position.y + offsetY,
    left: position.x + offsetX,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
  };

  return (
    <BlurFade
      duration={0.25}
      className="z-[99] p-2 border border-red-700 rounded-md text-white"
      style={followerStyle}
    >
      {text}
    </BlurFade>
  );
};

export default Tooltip;
