import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useTranslation} from "react-i18next";
import Loader from "@/components/ui/Loader";
import Comments from "@/components/devlog/Comments";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import "react-quill/dist/quill.snow.css";
import {TPost} from "@/lib/type";

export default function DevlogPost() {
  const {id} = useParams<{id: string}>();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState<TPost | null>(null);

  const navigate = useNavigate();
  const {t} = useTranslation();

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
    <BlurFade className="relative flex flex-col w-full dark:text-white min-h-full gap-8 max-w-[800px] mx-auto">
      {loading ? (
        <Loader />
      ) : error || !post ? (
        <h1 className="w-full mx-auto mt-5 text-center text-red-600 md:text-lg md:mt-8">
          {t("devlogError")}
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
            <p className="hidden md:flex mt-[2px]">{t("Return")}</p>
          </div>
          <div className="flex items-center w-full h-8 gap-4">
            <p className="flex items-center h-full px-4 py-1 text-white bg-darkGray ">
              {t("name")}
            </p>
            <p>{convertDate(post.created_at)}</p>
          </div>
          <h1 className="text-4xl">{post.title}</h1>
          <div
            className="w-full h-auto p-0 mt-4 mb-4 overflow-visible ql-editor"
            dangerouslySetInnerHTML={{__html: post.content}}
          />
        </>
      )}
      {!loading && post && <Comments likes={post ? post.likes : null} />}
    </BlurFade>
  );
}
