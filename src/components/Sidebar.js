import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Login Page", path: "/login" },
    { name: "Dropdown", path: "/dropdown" },
    { name: "Accordion", path: "/accordion" },
    { name: "Buttons", path: "/buttons" },
    { name: "Dynamic-Routing", path: "/dynamic" },
    { name: "Nested-Routes", path: "/nested" },
    { name: "useSearchParams Hook", path: "/search" },
  ];
  return (
    <div className="sticky flex flex-col text-blue-500 ml-10 mt-5 ">
      <ul>
        {links.map((link) => {
          return (
            <NavLink to={link.path} key={link.name}>
              <li>{link.name}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
