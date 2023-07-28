import { CATEGORY } from "@/constants";
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
            </li>
            {CATEGORY.map(({ id, title }) => {
              return (
                <li key={id}>
                  <NavLink to={`/quotes/${id}`} end>
                    {title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
      <div className="flex-grow">{children}</div>
    </>
  );
};

export default Sidebar;
