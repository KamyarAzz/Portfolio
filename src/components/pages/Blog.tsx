import {useEffect, useState} from "react";
import PostPreview from "../blog/PostPreview";
import Loader from "../ui/Loader";
import SortButton from "../blog/SortButton";
import Pagination from "../blog/Pagination";

type Post = {
  id: number;
  title: string;
  description: string;
  likes: number;
  created_at: string;
  comment_count: number;
};

export default function Blog() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [sortString, setSortString] = useState<null | "desc" | "asc">(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const createQueryString = () => {
    let queryString = "";
    if (searchString !== "") queryString += "search=" + searchString + "&";
    if (sortString) queryString += "sort=created_at&order=" + sortString + "&";
    queryString += "page=" + page + "&limit=5";
    return "?" + queryString;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          baseUrl + "/api/posts" + createQueryString()
        );
        if (response.ok) {
          const serverResponse = await response.json();
          setPosts(serverResponse.posts);
          setTotalPages(serverResponse.totalPages);
        }
      } catch (err) {
        setError(true);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, sortString, searchString]);

  return (
    <div className="flex flex-col w-full h-full min-h-full overflow-y-hidden md:flex-row-reverse md:justify-center md:gap-16 lg:gap-24">
      {error ? (
        <h1 className="w-full mt-5 text-lg text-center text-red-600 md:mt-8">
          An error occurred please try again later.
        </h1>
      ) : (
        <div className="flex flex-col w-full gap-4 mt-4 md:mt-10 max-w-[700px]">
          <div className="flex items-center justify-between w-full gap-4">
            <input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex justify-between w-full gap-4 px-4 py-2 bg-white border rounded-md max-w-[300px] duration-200 focus:border-gray-600 focus:dark:border-gray-400 dark:text-white outline-none focus:outline-none dark:bg-darkCharcoal md:py-2"
              placeholder="Search"
              type="text"
            />
            <SortButton setSort={setSortString} sort={sortString} />
          </div>
          {loading ? (
            <Loader />
          ) : posts.length === 0 ? (
            <h1 className="mt-20 text-lg text-center dark:text-white">
              No posts available at the moment.
            </h1>
          ) : (
            posts.map((post) => {
              return <PostPreview key={post.id} post={post} />;
            })
          )}
          {totalPages > 1 && (
            <Pagination setPage={setPage} page={page} totalPages={totalPages} />
          )}
        </div>
      )}
    </div>
  );
}
