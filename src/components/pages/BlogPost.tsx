import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "../ui/Loader";

type Post = {
  content: string;
  created_at: Date;
  description: string;
  id: number;
  likes: number;
  title: string;
};

export default function BlogPost() {
  const {id} = useParams<{id: string}>();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(baseUrl + `/api/posts/${id}`);
        if (response.ok) {
          const serverResponse = await response.json();
          console.log(serverResponse);
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

  return loading ? (
    <Loader />
  ) : error ? (
    <h1 className="text-red-600">An error occurred please try again later.</h1>
  ) : (
    post && <div>{post.title}</div>
  );
}
