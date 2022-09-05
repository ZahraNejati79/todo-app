import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import Todo from "./Todo";

const TodoList = ({ todos, completedHandler }) => {
  const clickhandler = () => {};

  return (
    <section className=" flex flex-col items-center justify-center w-screen  ">
      <h2>لیست انجام کارها</h2>
      <div className=" p-4 flex flex-col text-purple-800 gap-y-4 items-center justify-center w-full ">
        {todos.map((todo) => (
          <Todo onCompleted={() => completedHandler(todo.id)} todo={todo} />
        ))}
      </div>
    </section>
  );
};

export default TodoList;
