import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
const Todo = ({ todo, onCompleted }) => {
  return (
    <div
      dir="rtl"
      className="  py-8 px-4  text-right w-1/2 flex justify-between items-center rounded-3xl "
      key={todo.id}
    >
      <div className="flex items-center justify-center">
        <button onClick={onCompleted} className="cursor-pointer">
          {todo.isCompleted ? (
            <div>
              <GrCheckboxSelected />
            </div>
          ) : (
            <GrCheckbox />
          )}
        </button>
        <div className="pr-4">{todo.text}</div>
      </div>
      <div className="text-purple-200">
        {new Date(todo.createdAt).toLocaleDateString("fa-IR")}
      </div>
    </div>
  );
};

export default Todo;
