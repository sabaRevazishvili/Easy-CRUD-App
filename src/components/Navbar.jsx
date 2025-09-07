import React from "react";
import { routes } from "../constants/routes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {routes.map((route, index) => (
        <Link
          key={index}
          to={route.path}
          className="m-2 p-2 border border-black rounded hover:bg-black hover:text-white"
        >
          {route.title}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
