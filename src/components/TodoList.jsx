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
    const newTodo = { text: todo.text, color: todo.color };
    updateHandler(newTodo, edit.id);
    setEdit({
      id: null,
      text: "",
      isCompleted: false,
    });
  };
  return (
    <section className=" flex flex-col items-center justify-center w-screen ">
      {edit.id ? (
        <TodoForm submitTodo={onEditTodo} edit={edit} setEdit={setEdit} />
      ) : (
        <>
          <div className=" pt-4  flex flex-col gap-y-4 items-center justify-center w-full ">
            {todos.map((todo) => (
              <div className="flex  items-center justify-center">
                <Todo
                  key={todo.id}
                  onCompleted={() => completedHandler(todo.id)}
                  onDelete={() => deleteHandler(todo.id)}
                  onEdit={() => setEdit(todo)}
                  todo={todo}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default TodoList;
