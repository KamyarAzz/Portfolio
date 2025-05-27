import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Loader from "../ui/Loader";
import Comments from "../blog/Comments";

type Post = {
  content: string;
  created_at: string;
  description: string;
  id: number;
  likes: number;
  title: string;
};

export default function BlogPost() {
  const {id} = useParams<{id: string}>();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState<Post | null>(null);

  const navigate = useNavigate();

  const convertDate = (isoString: string) => {
    const date = new Date(isoString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(baseUrl + `/api/posts/${id}`);
        if (response.ok) {
          const serverResponse = await response.json();
          setPost(serverResponse);
        }
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  return (
    <div className="relative flex flex-col w-full h-full dark:text-white min-h-full overflow-y-hidden gap-8 max-w-[700px] mx-auto">
      {loading ? (
        <Loader />
      ) : error || !post ? (
        <h1 className="w-full mx-auto mt-5 text-center text-red-600 md:text-lg md:mt-8">
          An error occurred please try again later.
        </h1>
      ) : (
        <>
          <div
            className="w-min group cursor-pointer flex gap-1.5 items-center px-4 py-1 dark:text-gray-500 text-gray-400 duration-300 border border-gray-400 dark:border-gray-500 rounded-full hover:border-gray-600 hover:text-gray-600 hover:dark:border-gray-200 hover:dark:text-gray-200"
            onClick={() => navigate(-1)}
          >
            <svg
              className="w-2 h-full duration-300 dark:fill-gray-500 fill-gray-400 group-hover:dark:fill-gray-200 group-hover:fill-gray-600 group-hover:-translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
            <p className="hidden md:flex mt-[2px]">Return</p>
          </div>
          <div className="flex items-center w-full h-8 gap-4">
            <p className="flex items-center h-full px-4 text-white bg-darkGray ">
              Kamyar Azizi
            </p>
            <p>{convertDate(post.created_at)}</p>
          </div>
          <h1 className="text-4xl">{post.title}</h1>
          <div className="mt-9">{post.content}</div>
        </>
      )}
      <Comments likes={post ? post.likes : null} />
    </div>
  );
}
