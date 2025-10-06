import {cn} from "@/lib/utils";

type Props = {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number;
};

export default function Pagination({setPage, page, totalPages}: Props) {
  return (
    <div className="flex gap-2">
      {Array(totalPages)
        .fill(null)
        .map((_, i) => (
          <div
            onClick={() => setPage(i + 1)}
            className={cn(
              i + 1 === page ? " cursor-default" : " cursor-pointer",
              "flex flex-col items-center justify-center w-10 h-10 bg-white border rounded-md dark:text-white dark:bg-darkCharcoal"
            )}
            key={i}
          >
            <p>{i + 1}</p>
            {i + 1 === page && (
              <div className="w-1 h-1 rounded-full bg-mainRed" />
            )}
          </div>
        ))}
    </div>
  );
}
