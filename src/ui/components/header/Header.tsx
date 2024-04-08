import { Link, NavLink } from "react-router-dom";
import { useStore } from "../../../contexts/store";

const Header = (): JSX.Element => {
  const { isShowMobileNavbar, setIsShowMobileNavbar } = useStore();
  return (
    <header className="bg-white sm:fixed left-0 right-0 shadow-[0px_2px_4px_1px_rgb(0,0,0,0.3)] py-3 z-30">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src="../assets/react.svg" />
              <span className="pl-2">selling houses</span>
            </div>
          </Link>
          <ul
            className={`duration-500 fixed sm:static w-64 sm:w-auto top-0 ${
              isShowMobileNavbar ? "right-0" : "-right-64"
            } right-0 bg-white flex flex-col pt-4 sm:pt-0 items-center bottom-0 sm:flex-row gap-4 text-lg z-40`}
          >
            <NavLink className="header-menu__link" to="/">
              home
            </NavLink>
            <NavLink className="header-menu__link" to="/products">
              houses
            </NavLink>
            <NavLink className="header-menu__link" to="/create-product">
              create ads
            </NavLink>
            <NavLink className="header-menu__link" to="/sorting">
              sorting
            </NavLink>
          </ul>
          <button
            className="cursor-pointer sm:hidden"
            onClick={() => setIsShowMobileNavbar((prev) => !prev)}
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
