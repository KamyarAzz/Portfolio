import {useNavigate} from "react-router-dom";

type Props = {
  post: {
    id: number;
    title: string;
    description: string;
    likes: number;
    created_at: string;
    comment_count: number;
  };
};

export default function PostPreview({post}: Props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/blog/" + post.id);
  };
  return (
    <div
      className="flex w-full hover:border-gray-600 md:gap-10 gap-6 hover:dark:border-gray-400 justify-between p-2.5 duration-300 text-black border rounded-md cursor-pointer bg-softGray dark:bg-darkCharcoal md:p-4 dark:text-white md:text-lg ltr"
      onClick={clickHandler}
    >
      <div className="flex flex-col gap-3">
        <h1 className="font-bold dark:text-white">{post.title}</h1>
        <p className="text-sm text-gray-400">{post.description}</p>
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-sm tracking-widest text-gray-400">
          {post.created_at.slice(0, 10).replace(/-/g, "/")}
        </p>
        <div className="flex w-full justify-between gap-2.5">
          <div className="flex gap-1">
            <svg
              className="self-start w-6 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z" />
            </svg>
            <p className="self-end pb-0.5 text-sm text-gray-400">
              {post.likes}
            </p>
          </div>
          <div className="flex gap-1">
            <svg
              className="self-start w-6 fill-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c0 0 0 0 0 0l.3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z" />
            </svg>
            <p className="self-end pb-0.5 text-sm text-gray-400">
              {post.comment_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
