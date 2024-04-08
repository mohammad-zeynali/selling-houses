import { Link, NavLink } from "react-router-dom";

const Header = (): JSX.Element => {
  return (
    <header className="shadow-lg py-2">
      <div className="container">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img src="../assets/react.svg" />
              <span className="pl-2">selling houses</span>
            </div>
          </Link>
          <ul className="flex gap-4">
            <NavLink className="header-menu__link" to="/">
              Home
            </NavLink>
            <NavLink className="header-menu__link" to="/products">
              Products
            </NavLink>
            <NavLink className="header-menu__link" to="/create-product">
              create products
            </NavLink>
            <NavLink className="header-menu__link" to="/search">
              search
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
