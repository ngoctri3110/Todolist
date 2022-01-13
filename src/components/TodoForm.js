import React, { useState } from "react";
import { addTodo } from "../store/reducers/todoSlice";
import { useDispatch } from "react-redux";
const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };
  const addSingleTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={addSingleTodo}>
        <input type="text" value={title} onChange={changeTitle} />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default TodoForm;
