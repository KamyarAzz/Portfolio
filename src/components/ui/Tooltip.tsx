import {useState, useEffect} from "react";

const Tooltip = ({text}: {text: string}) => {
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
    position: "absolute",
    top: position.y - 25,
    left: position.x + 25,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div
      className="z-[99] p-2 border border-red-700 rounded-md text-white"
      style={followerStyle}
    >
      {text}
    </div>
  );
};

export default Tooltip;
