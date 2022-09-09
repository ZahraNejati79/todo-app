import { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { RiEmotionUnhappyFill } from "react-icons/ri";
const TodoList = ({
  route,
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

  return todos.length ? (
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
  ) : (
    <div className=" w-40 h-40  mt-40 flex items-center justify-center">
      <div className=" text-3xl text-black">
        {route ? (
          <div className=" text-purple-800 flex flex-col justify-center items-center">
            <span className="text-9xl">
              <RiEmotionUnhappyFill />
            </span>
            <span className="text-lg text-black mt-8">:( ای تنبل</span>
          </div>
        ) : (
          <div className=" text-purple-800 flex flex-col justify-center items-center">
            <span className="text-9xl">
              <RiEmotionUnhappyFill />
            </span>
            <span className="text-lg text-black mt-8">:( ای بیکار</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
