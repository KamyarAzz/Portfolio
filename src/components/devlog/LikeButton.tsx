import {useState} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {cn} from "@/lib/utils";

type Props = {
  likes: number;
};

export default function LikeButton({likes}: Props) {
  const {id} = useParams<{id: string}>();
  const {t} = useTranslation();

  const calculateHasLiked = () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    if (likedPosts.includes(id)) {
      return true;
    }
    return false;
  };
  const [hasLiked, setHasLiked] = useState<boolean>(calculateHasLiked());
  const [likeCount, setLikeCount] = useState<number>(likes);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleLike = async () => {
    const likedPosts = JSON.parse(localStorage.getItem("likedPosts") || "[]");
    let updatedLikes;

    if (hasLiked) {
      updatedLikes = likedPosts.filter((id: string) => id !== id);
      setLikeCount(likeCount - 1);
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikes));
      setHasLiked(false);

      // Send "unlike" to server
      await fetch(baseUrl + `/api/posts/${id}/unlike`, {
        method: "POST",
      });
    } else {
      updatedLikes = [...likedPosts, id];
      setLikeCount(likeCount + 1);
      localStorage.setItem("likedPosts", JSON.stringify(updatedLikes));
      setHasLiked(true);

      // Send like to server
      await fetch(baseUrl + `/api/posts/${id}/like`, {
        method: "POST",
      });
    }
  };

  return (
    <div title={t("Like")} className="flex gap-2.5 items-center">
      <svg
        onClick={handleLike}
        className={cn(
          hasLiked ? "dark:fill-white fill-gray-600" : "fill-gray-400",
          "self-start w-6 cursor-pointer hover:drop-shadow-[0px_0px_4px_rgba(185,28,28,0.5)]"
        )}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
      </svg>
      <p
        className={cn(
          hasLiked ? "dark:text-white text-gray-600" : "text-gray-400",
          "self-end pb-0.5 text-lg"
        )}
      >
        {likeCount > 0 ? likeCount : 0}
      </p>
    </div>
  );
}
