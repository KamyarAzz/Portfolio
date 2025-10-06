import {useState} from "react";
import {toast} from "react-toastify";
import ReactQuill, {Quill} from "react-quill";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import "react-quill/dist/quill.snow.css";

type Post = {
  title: string;
  description: string;
  content: string;
};

const modules = {
  toolbar: [
    [{header: [1, 2, 3, false]}],
    [{align: []}], // Text alignment dropdown
    ["bold", "italic", "underline", "strike"], // Basic formatting
    ["blockquote", "code-block"], // blockquote & code block
    [{list: "ordered"}, {list: "bullet"}],
    ["image"], // Image upload button
    ["clean"], // Remove formatting button
  ],
  imageResize: {
    parchment: Quill.import("parchment"),
  },
};

function DevEditor() {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handlePost = async (newPost: Post) => {
    setLoading(true);
    try {
      const response = await fetch(baseUrl + "/api/posts", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newPost),
      });
      if (response.ok) {
        toast.success("Post created!");
      }
    } catch (err) {
      toast.success("Error!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const clickHandler = async () => {
    handlePost({
      title,
      description,
      content,
    });
  };

  return loading ? (
    <div className="fixed flex items-center justify-center w-full h-full bg-opacity-50">
      <Loader />
    </div>
  ) : (
    <div className="flex flex-col w-full gap-5 mx-auto">
      <input
        className="p-1 bg-transparent border border-gray-400 dark:border-gray-300 dark:text-white"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <textarea
        className="p-1 text-black bg-transparent border border-gray-400 dark:border-gray-300 dark:text-white"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <ReactQuill
        modules={modules}
        theme="snow"
        value={content}
        onChange={setContent}
      />
      <Button className="mt-10" onClick={clickHandler}>
        Submit
      </Button>
    </div>
  );
}

export default DevEditor;
