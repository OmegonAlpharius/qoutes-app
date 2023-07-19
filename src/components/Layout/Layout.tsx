import { Outlet, NavLink, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
              Awesome Quotes App
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={"/quotes"} end>
                  Quotes
                </NavLink>
              </li>
              <li>
                <NavLink to={"quotes/add"} end>
                  New Quotes
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <main className="flex sm:flex-wrap h-full ">
        <Outlet />
      </main>
      <footer className="p-10" />
    </>
  );
};

export default Layout;
