import styles from "@/css/animationDot.module.css";
import profilePic from "@/assets/images/profilePic.jpg";
import {cn} from "@/lib/utils";

export default function ProfilePicture() {
  return (
    <div className="relative p-2 z-[99] border-2 border-red-700 rounded-full md:p-5">
      <div
        className={cn(
          "absolute hidden md:block w-full h-full left-0 top-0",
          styles.animation
        )}
      >
        <div className="relative top-0 w-5 h-5 -translate-y-1/2 bg-red-600 rounded-full left-1/2" />
      </div>
      <div
        className="w-40 h-40 bg-clip-content bg-no-repeat rounded-full shadow-md md:w-64 md:h-64 md:bg-[length:460px] md:bg-[position:70%_30%] bg-[length:340px] bg-[position:65%_30%]"
        style={{
          backgroundImage: `url(${profilePic})`,
        }}
      ></div>
    </div>
  );
}
