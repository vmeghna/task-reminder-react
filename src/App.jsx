import { avengers } from "./constants";
import { useState } from "react";
import Item from "./components/item";
const App = () => {
  const [data, setData] = useState(avengers);

  const deleteItem = (id) => {
    const remainingItem = data.filter((item) => item.id !== id);
    setData(remainingItem);
  };
  const clearItems = () => {
    setData([]);
  };

  return (
    <main
      className="bg-gradient-to-r from-purple-500 to-pink-500  min-h-screen w-screen flex items-center 
    justify-center"
    >
      <div className="card w-[38rem] bg-white shadow-lg rounded-xl p-4 min-h-[30rem]">
        <h1 className="text-center text-4xl font-bold mt-5 underline font-meeri text-purple-800">
          Task Reminder
        </h1>
        <ul className="flex flex-col gap-8 my-8">
          {data.map((item) => {
            const { id, name, task, imageUrl } = item;
            return (
              <Item
                key={id}
                id={id}
                name={name}
                task={task}
                imageUrl={imageUrl}
                deleteItem={deleteItem}
              />
            );
          })}
        </ul>
        <div className="flex justify-center my-1">
          <button
            className="px-8 py-2 bg-violet-700 font-bold text-white rounded"
            onClick={clearItems}
          >
            Clear All
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
