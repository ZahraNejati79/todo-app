import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = ({
  todos,
  completedHandler,
  deleteHandler,
  updateHandler,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
    isCompleted: false,
  });
  const onEditTodo = (todo) => {
    const newTodo = todo.text;
    updateHandler(newTodo, edit.id);
    setEdit({
      id: null,
      text: "",
      isCompleted: false,
    });
  };
  return (
    <section className=" flex flex-col items-center justify-center w-screen  ">
      {edit.id ? (
        <TodoForm submitTodo={onEditTodo} edit="edit" />
      ) : (
        <>
          <h2>لیست انجام کارها</h2>
          <div className=" p-4 flex flex-col text-purple-800 gap-y-4 items-center justify-center w-full ">
            {todos.map((todo) => (
              <Todo
                key={todo.id}
                onCompleted={() => completedHandler(todo.id)}
                onDelete={() => deleteHandler(todo.id)}
                onEdit={() => setEdit(todo)}
                todo={todo}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TodoList;
