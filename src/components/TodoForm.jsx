import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
const TodoForm = ({ addTodoHandler }) => {
  const [todo, setTodo] = useState("");
  const changeHandler = (e) => {
    setTodo(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTodoHandler(todo);
    setTodo("");
  };
  return (
    <section>
      <form className="p-8" onSubmit={submitHandler}>
        <input
          value={todo}
          onChange={changeHandler}
          placeholder="افزودن کار"
          type="text"
        />
        <button type="submit">
          <AiFillPlusCircle />
        </button>
      </form>
    </section>
  );
};

export default TodoForm;
