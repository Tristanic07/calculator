interface IbuttonProps {
  text: string;
  onClick?: () => void;
}

function ButtonStyle({ text, onClick }: IbuttonProps) {
  return (
    <button
      className={`h-12 text-white  rounded-lg ${
        text === "="
          ? "col-span-2 bg-red-700 hover:bg-red-800 "
          : "bg-violet-800 hover:bg-violet-900  col-span-1 "
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default ButtonStyle;
