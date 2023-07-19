import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  return (
    <aside className="flex ">
      <nav className="bg-base-100 w-64 flex flex-col h-max">
        <ul className="flex flex-col py-4 px-6  menu ">
          <li>
            <NavLink to={"/quotes"} end>
              All
            </NavLink>
            <NavLink to={"/quotes/star-wars"} end>
              Star wars
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex-grow">{children}</div>
    </aside>
  );
};

export default Sidebar;
