import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const TodoForm = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState({
    text: "",
    color: "#9f40dd",
  });

  const changeHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTodoHandler(todo);
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
        />
        <input
          onChange={changeHandler}
          name="color"
          value={todo.color}
          type="color"
        />
        <button type="submit">
          <AiFillPlusCircle />
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
