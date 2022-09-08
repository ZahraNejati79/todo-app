import Circle from "@uiw/react-color-circle";
import { useEffect, useRef, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
const TodoForm = ({ submitTodo, edit, setEdit }) => {
  const [showForm, setShowForm] = useState(edit ? true : false);
  const [hex, setHex] = useState("#F44E3B");
  const [todo, setTodo] = useState(
    edit
      ? {
          text: edit.text,
          color: edit.color,
        }
      : {
          text: "",
          color: "",
        }
  );
  const closeHandler = (e) => {
    if (e.target.id === "container") {
      setShowForm(false);
      setEdit({
        id: null,
        text: "",
        isCompleted: false,
      });
    }
  };
  const inputRef = useRef();
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);
  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(todo, "edit");
    submitTodo(todo);
    setTodo({
      text: "",
      color: "",
    });
  };
  return (
    <div>
      {showForm ? (
        <section
          onClick={closeHandler}
          id="container"
          className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-md bg-black"
        >
          <div className=" bg-gray-50 p-4 flex flex-col items-center justify-center ">
            <div className="w-full text-left border-b-2 pb-2 mb-4 border-gray-300">
              <span
                onClick={() => {
                  setShowForm(false);
                  setEdit({
                    id: null,
                    text: "",
                    isCompleted: false,
                  });
                }}
                className="cursor-pointer"
              >
                <AiOutlineClose />
              </span>
            </div>
            <h2>{edit ? "ویرایش کنید" : "اضافه کردن کار جدید"}</h2>
            <form
              className="p-8 flex flex-col justify-center items-center gap-y-4"
              onSubmit={submitHandler}
            >
              <input
                className="px-2 py-1 outline-none border-2 focus:border-gray-300  rounded-lg text-right w-full"
                value={todo.text}
                name="text"
                onChange={changeHandler}
                placeholder="افزودن کار"
                type="text"
                ref={inputRef}
              />
              <Circle
                value={todo.color}
                colors={["#ef4444", "#84cc16", "#3b82f6", "#f97316", "#a855f7"]}
                color={hex}
                onChange={(color) => {
                  setHex(color.hex);
                  setTodo({ ...todo, color: color.hex });
                }}
              />
              <button
                className="bg-white border-2 text-gray-600 hover:bg-gray-50 border-gray-300 px-6 py-2 rounded-lg"
                type="submit"
              >
                {edit === "edit" ? "ویرایش" : "افزودن"}
              </button>
            </form>
          </div>
        </section>
      ) : (
        <div>
          <button
            className="text-purple-800 text-8xl  fixed bottom-0 right-0 "
            onClick={() => setShowForm(true)}
          >
            <IoMdAddCircle />
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoForm;
