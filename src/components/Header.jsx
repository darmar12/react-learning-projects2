import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/category">Category</NavLink>
          <NavLink to="/product">Product</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
