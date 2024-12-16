import {useState, useEffect} from "react";

const Tolltip = ({text}: {text: string}) => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const followerStyle: React.CSSProperties = {
    position: "absolute",
    top: position.y - 25, // Offset the follower to avoid being directly under the cursor
    left: position.x + 25,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    pointerEvents: "none", // Prevent the follower from interfering with mouse events
    transform: "translate(-50%, -50%)", // Center the div on the cursor
  };

  return (
    <div
      className="border-[1px] z-[99] border-red-700 rounded-md p-2 text-white"
      style={followerStyle}
    >
      {text}
    </div>
  );
};

export default Tolltip;
