import { useEffect, useRef, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { RiEdit2Fill } from "react-icons/ri";
const TodoForm = ({ submitTodo, edit }) => {
  const [todo, setTodo] = useState({
    text: "",
    color: "#9f40dd",
  });
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    submitTodo(todo);
    setTodo({
      text: "",
      color: "#9f40dd",
    });
  };
  return (
    <section>
      <form className="p-8" onSubmit={submitHandler}>
        <input
          value={todo.text}
          name="text"
          onChange={changeHandler}
          placeholder="افزودن کار"
          type="text"
          ref={inputRef}
        />
        <input
          onChange={changeHandler}
          name="color"
          value={todo.color}
          type="color"
        />
        <button type="submit">
          {edit === "edit" ? <RiEdit2Fill /> : <AiFillPlusCircle />}
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
