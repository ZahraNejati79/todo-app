import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
const Todo = ({ todo, onCompleted, onDelete }) => {
  return (
    <div
      dir="rtl"
      className="  py-8 px-4  text-right w-1/2 flex justify-between items-center rounded-3xl "
      key={todo.id}
    >
      <div className="flex items-center justify-center gap-x-4">
        <button onClick={onCompleted} className="cursor-pointer">
          {todo.isCompleted ? (
            <div>
              <ImCheckboxChecked />
            </div>
          ) : (
            <ImCheckboxUnchecked />
          )}
        </button>
        <button onClick={onDelete}>
          <RiDeleteBin5Fill />
        </button>
        <button>
          <RiEdit2Fill />
        </button>
        <div
          className={`py-4 ${
            todo.isCompleted ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.text}
        </div>
      </div>
      <div className="text-purple-200">
        {new Date(todo.createdAt).toLocaleDateString("fa-IR")}
      </div>
    </div>
  );
};

export default Todo;
