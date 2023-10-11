import { useState, useRef } from "react";
import ListItem from "../components/ListItem";

function Todo() {
  // usestate -> {state, setstate}
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  // Add a new todo
  const addTodo = () => {
    const todoValue = inputRef.current.value;
    console.log(todoValue);
    setTodos([...todos, todoValue]);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <input
          ref={inputRef}
          type="text"
          className="rounded-md bg-[#444] p-2"
        />
        <button
          onClick={addTodo}
          className="rounded-md bg-indigo-600 px-4 py-2"
        >
          Add ToDo
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {todos.map((value, index) => {
          return <ListItem key={index} text={value} />;
        })}
      </ul>
    </div>
  );
}

export default Todo;
