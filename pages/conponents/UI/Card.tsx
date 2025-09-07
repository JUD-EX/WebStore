"use client";

interface Props {
  AppName: string;
  Icon: string;
  Description: string;
}

export default function Card({ AppName, Icon, Description }: Props) {
  function handle_click() {
    console.log("it works !!");
  }

  return (
    <button
      onClick={handle_click}
      className="flex flex-col items-center justify-between w-44 h-56 p-4 rounded-2xl 
                 border border-gray-200 dark:border-gray-700 
                 bg-white dark:bg-gray-900 
                 shadow-md hover:shadow-lg 
                 hover:scale-105 transition-transform duration-200 ease-in-out"
    >
      <div className="flex justify-center items-center h-28 w-28 overflow-hidden">
        <img
          src={Icon}
          alt="app icon"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="text-center mt-2">
        <p className="font-semibold text-gray-800 dark:text-gray-100">{AppName}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">
          {Description}
        </p>
      </div>
    </button>
  );
}
