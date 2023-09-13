import { Outlet, Link } from "react-router-dom";

//Change this to navbar
const LayoutPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default LayoutPage;
