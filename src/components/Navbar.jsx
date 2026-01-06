import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter-app</Link>
          </li>
          <li>
            <Link to="/todo">todo-app</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav> */}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/counter">Counter-app</a>
          </li>
          <li>
            <a href="/todo">todo-app</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
