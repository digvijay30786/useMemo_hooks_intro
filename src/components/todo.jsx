import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";
import { TodoItemWithUseMemo } from "./TodoList";
export const Todo = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = () => {
    const details = {
      title: text,
      id: uuid(),
      status: false
    };
    setData([...data, details]);
    setText("");
  };

  const handleToggle = useCallback(
    (id) => {
      const updateTodos = data.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      );
      setData(updateTodos);
    },
    [data]
  );

  const handleDelete = useCallback(
    (id) => {
      const DeleteItem = data.filter((item) => item.id !== id);
      setData(DeleteItem);
    },
    [data]
  );

  return (
    <>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter the title "
        value={text}
      />

      <button onClick={handleSubmit}>Add</button>
      <div>
        {data.map((item) => {
          return (
            <TodoItemWithUseMemo
              key={item.id}
              {...item}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </>
  );
};
