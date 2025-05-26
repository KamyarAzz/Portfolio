import {useNavigate} from "react-router-dom";

type Props = {
  title: string;
  description: string;
  id: number;
};

export default function PostPreview({title, description, id}: Props) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/blog/" + id);
  };
  return (
    <div
      className="flex flex-col w-full gap-3 p-4 border-2 rounded-md cursor-pointer"
      onClick={clickHandler}
    >
      <h1 className="font-bold dark:text-white">{title}</h1>
      <p className="text-sm dark:text-white">{description}</p>
    </div>
  );
}
