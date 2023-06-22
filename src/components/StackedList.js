import React from "react";
import { Link } from "react-router-dom";
// for dynamic routing
const StackedList = ({ students }) => {
 
  return (
    <div>
      <ul className="divide-y-2 divide-gray-200">
        {students.map((student) => {
          return (
            <li
              key={student.rollNo}
              className="flex justify-between py-4 text-gray"
            >
              <h1>{student.name}</h1>
              <h2>{student.age}</h2>
              <p>{student.rollNo}</p>
              <Link
                to={`/dynamic/${student.rollNo}`}
                className="bg-blue-500 text-white rounded px-2 py-1"
                state={student}
              >
                View Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StackedList;
