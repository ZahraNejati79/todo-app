import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import { RiDeleteBin5Fill, RiEdit2Fill } from "react-icons/ri";
const Todo = ({ todo, onCompleted, onDelete, onEdit }) => {
  const { color } = todo;

  return (
    <div
      dir="rtl"
      style={{ "border-color": color }}
      className="py-6 px-2 border-l-8 bg-white shadow-lg border-gray-200 text-gray-600 text-right flex justify-between items-center min-w-[20rem] md:min-w-[30rem] rounded-3xl w-full md:max-w-4xl "
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
        <button onClick={onEdit}>
          <RiEdit2Fill />
        </button>
        <div
          className={`py-4 ${
            todo.isCompleted ? "line-through text-gray-300" : ""
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
