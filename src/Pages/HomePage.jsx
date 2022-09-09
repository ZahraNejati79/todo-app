import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Layout from "../Layout/Layout";

const HomePage = ({
  submitTodo,
  todos,
  completedHandler,
  deleteHandler,
  updateHandler,
}) => {
  return (
    <>
      <Layout>
        <TodoForm submitTodo={submitTodo} />
        <TodoList
          todos={todos}
          completedHandler={completedHandler}
          deleteHandler={deleteHandler}
          updateHandler={updateHandler}
        />
      </Layout>
    </>
  );
};

export default HomePage;
