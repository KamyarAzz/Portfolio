import {useEffect, useState} from "react";
import PostPreview from "../blog/PostPreview";
import Loader from "../ui/Loader";

type Post = {
  id: number;
  title: string;
  description: string;
  content: string;
  likes: number;
  createdAt: Date;
  //   comments: any;
};

export default function Blog() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(baseUrl + "/api/posts");
        if (response.ok) {
          const serverResponse = await response.json();
          setPosts(serverResponse);
        }
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-full md:flex-row-reverse md:justify-center md:gap-16 lg:gap-24 h-max">
      {loading ? (
        <Loader />
      ) : error ? (
        <h1 className="text-red-600">
          An error occurred please try again later.
        </h1>
      ) : (
        <div className="flex flex-col w-full gap-4 mt-4 md:mt-10 max-w-[700px]">
          <div className="flex items-center justify-between">
            <input
              className="flex justify-between w-full gap-4 px-4 py-2 bg-white border-2 rounded-md max-w-[300px] dark:text-white focus:outline-none dark:bg-darkBg md:py-1"
              placeholder="Search"
              type="text"
            />
          </div>
          {posts.length === 0 ? (
            <h1 className="mt-20 text-lg text-center dark:text-white">
              No posts available at the moment.
            </h1>
          ) : (
            posts.map((post) => {
              return (
                <PostPreview
                  key={post.id}
                  id={post.id}
                  description={post.description}
                  title={post.title}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
