import { BsCalendarCheckFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <header className="fixed top-0 w-screen shadow-lg bg-white h-16 container">
      <div className="flex w-full h-full items-center justify-center">
        <nav className="max-w-5xl text-purple-800 w-full h-full flex justify-evenly items-center">
          <div className="text-3xl border border-r border-gray-200  h-full w-1/2 flex items-center justify-center">
            <button className="w-full h-full flex items-center justify-center">
              <Link to="/">
                <FaListUl />
              </Link>
            </button>
          </div>
          <div className="text-3xl border border-l border-gray-200 h-full w-1/2 flex items-center justify-center">
            <button className="w-full h-full flex items-center justify-center">
              <Link to="/complited">
                <BsCalendarCheckFill />
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
