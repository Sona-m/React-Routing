import React from "react";
import { Link, Outlet } from "react-router-dom";
// for nested routing
const RouteList = () => {
  const id = 123;
  return (
    <div className=" items-center justify-center">
      <div className="font-bold text-5xl text-white mt-28 mb-10 text-center flex-row">
        Nested Routing
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={`/nested/${id}`}
          className="text-center rounded border border-blue-100 mr-5 px-3  py-4 bg-blue-400 text-white"
        >
          Route ID
        </Link>
        <Link
          to="/nested/new"
          className="text-center rounded border border-blue-100  px-3 py-4 bg-blue-400 text-white"
        >
          New Route
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default RouteList;
