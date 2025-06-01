import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Loader from "@/components/ui/Loader";
import CommentForm from "@/components/form/CommentForm";
import LikeButton from "@/components/devlog/LikeButton";
import {TComment} from "@/lib/type";

type Props = {
  likes: number | null;
};

export default function Comments({likes}: Props) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const {id} = useParams<{id: string}>();
  const {t} = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [comments, setComments] = useState<TComment[]>([]);

  const fetchComments = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(baseUrl + `/api/comments/${id}`);
      if (response.ok) {
        const serverResponse = await response.json();
        setComments(serverResponse);
      }
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="flex flex-col w-full gap-4 pb-4 md:mt-4 md:pb-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2.5">
          <h1 className="text-lg">{t("Comments")}</h1>
          {comments.length > 0 && (
            <p className="flex items-center justify-center w-6 h-6 text-sm text-white rounded-full bg-mainRed">
              {comments.length}
            </p>
          )}
        </div>
        {!loading && !error && likes !== null ? (
          <LikeButton likes={likes} />
        ) : (
          <></>
        )}
      </div>
      <hr className="w-full mb-3 h-0.5 rounded-sm bg-lightGray dark:bg-darkGray" />
      {loading ? (
        <Loader hasFace={false} />
      ) : error ? (
        <h1 className="w-full mx-auto mt-5 text-center text-red-600 md:text-lg md:mt-8">
          An error occurred while loading comments please try again later.
        </h1>
      ) : (
        <>
          <CommentForm fetchComments={fetchComments} />
          {comments.length > 0 ? (
            comments.map((item) => (
              <div
                key={item.id}
                className="flex w-full gap-4 px-4 py-3 text-black border rounded-md bg-softGray dark:text-white dark:bg-darkCharcoal"
              >
                <div className="overflow-hidden border rounded-full w-9 h-9 min-h-9 min-w-9 border-gray-950 dark:border-gray-400">
                  <svg
                    className="w-full h-full mt-1 fill-gray-950 dark:fill-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                  </svg>
                </div>
                <div className="flex flex-col w-full gap-2.5 pt-1">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-lg font-bold">{item.full_name}</h4>
                    <p className="text-sm tracking-widest text-gray-400 whitespace-nowrap">
                      {item.created_at.slice(0, 10).replace(/-/g, "/")}
                    </p>
                  </div>
                  <p>{item.message}</p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-5 text-center md:mt-8 md:text-lg dark:text-white">
              No comments available at the moment.
            </h1>
          )}
        </>
      )}
    </div>
  );
}
