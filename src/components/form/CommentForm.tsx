import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

type Props = {
  fetchComments: () => Promise<void>;
};

type CommentData = {
  full_name: string;
  email: string;
  message: string;
};

export default function CommentForm({fetchComments}: Props) {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const {id} = useParams<{id: string}>();

  const {
    register,
    handleSubmit,
    formState: {isSubmitting, isValid},
    reset,
  } = useForm<CommentData>({
    mode: "onChange",
  });

  const onSubmit = async (data: CommentData) => {
    try {
      const res = await fetch(baseUrl + "/api/comments", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({...data, post_id: id}),
      });

      if (!res.ok) {
        throw new Error("Failed to submit comment");
      }

      toast.success("Comment submitted!");
      reset();
      fetchComments();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3 p-3 px-4 text-black border rounded-md bg-softGray dark:text-white dark:bg-darkCharcoal"
    >
      <h2 className="text-lg font-bold">Leave a comment</h2>
      <textarea
        className="p-1 bg-transparent border max-h-32 min-h-10"
        placeholder="Message"
        {...register("message", {required: "Message is required"})}
      ></textarea>
      <div className="flex flex-col justify-between flex-1 h-4 gap-4 md:flex-row">
        <input
          placeholder="Full Name"
          type="text"
          className="w-full p-1 bg-transparent border"
          {...register("full_name", {required: "Full name is required"})}
        />
        <input
          placeholder="Email"
          type="text"
          className="w-full p-1 bg-transparent border"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          })}
        />
        {/* <Button onClick={() => {}} className="w-max text-md">
          {"Comment"}
        </Button> */}
        <input
          disabled={!isValid || isSubmitting}
          className="bg-transparent hover:dark:bg-red-900 disabled:!bg-transparent dark:bg-red-700 px-7 py-1.5 border-2 disabled:!border-gray-500 dark:border-transparent border-red-700 hover:border-red-900 rounded-md w-min text-red-700 hover:text-red-900 disabled:!text-gray-500 dark:text-white duration-200 cursor-pointer disabled:!cursor-default"
          type="submit"
          value={"Comment"}
          id="submit"
        />
      </div>
    </form>
  );
}
