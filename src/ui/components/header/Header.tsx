import { Link, NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className="bg-white left-0 right-0 fixed shadow-[0px_2px_4px_1px_rgb(0,0,0,0.3)] py-3 z-30">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src="../assets/react.svg" />
              <span className="pl-2">selling houses</span>
            </div>
          </Link>
          <ul className="flex gap-4 text-lg">
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
