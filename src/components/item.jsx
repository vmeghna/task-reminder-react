import { FaTrashArrowUp } from "react-icons/fa6";

const Item = ({ imageUrl, name, task, id, deleteItem }) => {
  const clickHandler = (id) => {
    deleteItem(id);
  };
  return (
    <article className="flex items-center justify-between gap-4  w-[32rem] mx-auto">
      <div className="flex items-center justify-between gap-8">
        <div>
          <img src={imageUrl} alt={name} className="w-16 h-16 rounded-full" />
        </div>
        <div className="flex flex-col items-start  ml-8">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-xl font-bold ">{task}</span>
        </div>
      </div>
      <div>
        <button
          onClick={() => clickHandler(id)}
          className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center text-2xl text-red-500 shadow hover:cursor-pointer hover:translate-y-1 transition-all duration-300 ease-in"
        >
          <FaTrashArrowUp />
        </button>
      </div>
    </article>
  );
};

export default Item;
