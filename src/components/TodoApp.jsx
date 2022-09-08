import { useState } from "react";
import Layout from "../Layout/Layout";
import Navigation from "./Navigation";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: todo.text,
      color: todo.color,
      isCompleted: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([...todos, newTodo]);
  };
  const completedHandler = (id) => {
    const indexSelectedTodo = todos.findIndex((todo) => id === todo.id);
    const todosCopy = [...todos];
    todosCopy[indexSelectedTodo].isCompleted =
      !todosCopy[indexSelectedTodo].isCompleted;
    setTodos(todosCopy);
    console.log(todos);
  };
  const deleteHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const updateHandler = (newTodo, id) => {
    const indexSelectedTodo = todos.findIndex((todo) => id === todo.id);
    const updatedTodo = [...todos];
    const selectedTodo = { ...todos[indexSelectedTodo] };
    selectedTodo.text = newTodo.text;
    selectedTodo.color = newTodo.color;
    updatedTodo[indexSelectedTodo] = selectedTodo;
    setTodos(updatedTodo);
  };
  return (
    <Layout>
      <TodoForm submitTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        completedHandler={completedHandler}
        deleteHandler={deleteHandler}
        updateHandler={updateHandler}
      />
    </Layout>
  );
};

export default TodoApp;
