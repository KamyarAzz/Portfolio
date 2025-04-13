import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

export default function Button({children, onClick, className}: Props) {
  const clickHnadler = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`${className} rounded-md text-red-700 hover:text-red-900 hover:border-red-900 dark:text-white dark:bg-red-700 dark:hover:bg-red-900 dark:hover:border-red-900 border-2 border-red-700 duration-200 flex flex-row items-center justify-center py-1 px-4 text-center`}
      onClick={clickHnadler}
    >
      {children}
    </button>
  );
}
