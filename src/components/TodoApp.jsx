import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    console.log(todo);
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };
  const completedHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="container flex flex-col items-center mt-8  h-screen">
      <h1 className=" text-2xl">لیست کارها</h1>
      <div className="flex flex-col items-center justify-center w-full ">
        <TodoForm addTodoHandler={addTodoHandler} />
        <TodoList todos={todos} completedHandler={completedHandler} />
      </div>
    </div>
  );
};

export default TodoApp;
