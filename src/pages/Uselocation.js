import React from "react";
import { useLocation, useParams } from "react-router-dom";
// implement useLocation , useparams for dynamic routing
const Uselocation = () => {
  const location = useLocation();
  const { id } = useParams();
  console.log(id);
  const { rollNo, name, age, desc } = location.state;
  return (
    <div className="pl-24">
      <div className="text-center rounded border border-blue-100 mt-10 mr-20 px-3 py-4 bg-blue-400 text-white">
        <h1>Name : {name}</h1>
        <h2>Roll no : {rollNo}</h2>
        <h3>Age : {age}</h3>
        <p>Description : {desc}</p>
      </div>
    </div>
  );
};

export default Uselocation;
