import React, { useMemo } from "react";
const delay = (time) => {
  const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
};

export const TodoItemWithUseMemo = ({
  id,
  title,
  status,
  handleToggle,
  handleDelete
}) => {
  const updatedTime = useMemo(() => delay(200), []);
  return (
    <div>
      <h3> {`${title} - ${updatedTime}`}</h3>
      <button onClick={() => handleToggle(id)}>
        {status ? "TRUE" : "FALSE"}
      </button>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};
