import {useEffect, useState} from "react";
import Loader from "../ui/Loader";
import {useParams} from "react-router-dom";
import LikeButton from "./LikeButton";
import CommentForm from "../form/CommentForm";

type Props = {
  likes: number | null;
};

type Comment = {
  id: number;
  post_id: number;
  full_name: string;
  email: string;
  message: string;
  created_at: string;
};

export default function Comments({likes}: Props) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const {id} = useParams<{id: string}>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);

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
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-2.5">
          <h1 className="text-lg">Comments</h1>
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
                className="flex flex-col w-full gap-3 p-3 px-4 text-black border rounded-md bg-softGray dark:text-white dark:bg-darkCharcoal"
              >
                <div className="flex justify-between w-full">
                  <h4 className="text-lg font-bold">{item.full_name}</h4>
                  <p className="text-sm tracking-widest text-gray-400">
                    {item.created_at.slice(0, 10).replace(/-/g, "/")}
                  </p>
                </div>
                <p>{item.message}</p>
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
