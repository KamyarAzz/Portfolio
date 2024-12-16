import {useSelector} from "react-redux";
import clsx from "clsx";
import {reduxState} from "@/lib/type";
import styles from "@/css/animationDog.module.css";
import profilePic from "@/assets/images/profilePic.jpg";

export default function ProfilePicture() {
  const isMobile = useSelector((state: reduxState) => state.isMobile);
  return (
    <div className="relative p-2 z-[99] border-2 border-red-700 rounded-full md:p-5">
      {!isMobile && (
        <div
          className={clsx(
            "absolute w-full h-full left-0 top-0",
            styles.animation
          )}
        >
          <div className="relative top-0 w-5 h-5 -translate-y-1/2 bg-red-600 rounded-full left-1/2 " />
        </div>
      )}
      <div
        className="w-40 h-40 bg-no-repeat rounded-full shadow-md md:w-64 md:h-64"
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundClip: "content-box",
          backgroundSize: !isMobile ? "460px" : "340px",
          backgroundPosition: !isMobile ? "70% 30%" : "65% 30%",
        }}
      ></div>
    </div>
  );
}
