import { useEffect, useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Layout from "../Layout/Layout";

const CompletedPage = ({
  submitTodo,
  todos,
  completedHandler,
  deleteHandler,
  updateHandler,
}) => {
  const [completedTodos, setCopletedTodos] = useState([]);
  // const filterCompletedTodos = () => {
  //   const FilterCompleted = todos.filter((todo) => todo.isCompleted === true);
  //   setCopletedTodos(FilterCompleted);
  // };
  useEffect(() => {
    const FilterCompleted = todos.filter((todo) => todo.isCompleted === true);
    setCopletedTodos(FilterCompleted);
  }, []);
  return (
    <>
      <Layout>
        <TodoForm submitTodo={submitTodo} />
        <TodoList
          todos={completedTodos}
          completedHandler={completedHandler}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </Layout>
    </>
  );
};

export default CompletedPage;
