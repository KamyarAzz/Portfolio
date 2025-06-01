import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import PostPreview from "@/components/devlog/PostPreview";
import Loader from "@/components/ui/Loader";
import SortButton from "@/components/devlog/SortButton";
import Pagination from "@/components/devlog/Pagination";
import BlurFade from "@/components/ui/animations/container_animations/blur-fade";
import {TPostPreview} from "@/lib/type";
import {cn} from "@/lib/utils";

export default function Devlog() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [posts, setPosts] = useState<TPostPreview[]>([]);
  const [searchString, setSearchString] = useState<string>("");
  const [sortString, setSortString] = useState<null | "desc" | "asc">(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const {t, i18n} = useTranslation();

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
    <BlurFade
      className={cn(
        i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr",
        "flex flex-col w-full h-full min-h-full overflow-y-hidden md:flex-row-reverse md:justify-center md:gap-16 lg:gap-24"
      )}
    >
      {error ? (
        <h1
          className={cn(
            i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr",
            "w-full mt-5 text-center text-red-600 md:text-lg md:mt-8"
          )}
        >
          {t("devlogError")}
        </h1>
      ) : (
        <div className="flex flex-col w-full gap-4 md:mt-10 max-w-[700px]">
          <div className="flex items-center justify-between w-full gap-4">
            <input
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              className="flex justify-between w-full gap-4 px-4 py-2 bg-white border rounded-md max-w-[300px] duration-200 focus:border-gray-600 focus:dark:border-gray-400 dark:text-white outline-none focus:outline-none dark:bg-darkCharcoal md:py-2"
              placeholder={t("Search")}
              type="text"
            />
            <SortButton setSort={setSortString} sort={sortString} />
          </div>
          {loading ? (
            <Loader />
          ) : posts.length === 0 ? (
            <h1
              className={cn(
                i18n.dir(i18n.language) === "rtl" ? "rtl" : "ltr",
                "mt-5 text-center md:mt-8 md:text-lg dark:text-white"
              )}
            >
              {t("emptyArray")}
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
    </BlurFade>
  );
}
