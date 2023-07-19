import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Sidebar = ({ children }: Props) => {
  return (
    <>
      <aside className="basis-1/4">
        <nav className="bg-base-100 h-max">
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
      </aside>
      <div className="flex-grow">{children}</div>
    </>
  );
};

export default Sidebar;
