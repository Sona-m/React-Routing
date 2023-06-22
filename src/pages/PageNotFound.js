import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// page for the rendering if non of the routes matches

const PageNotFound = () => {
  const navigate = useNavigate(); // returns a function
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="text-5xl font-bold mb-8">Page Not Found !! </div>
      <p className="text-2xl text-center">
        you are entering a invalid link. make sure you enter correct link to
        render your pages.
      </p>
    </div>
  );
};

export default PageNotFound;
