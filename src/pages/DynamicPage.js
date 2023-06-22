import React from "react";
import StackedList from "../components/StackedList";

const DynamicPage = () => {
  const students = [
    {
      rollNo: 1,
      name: "Aman",
      age: 20,
      desc: "This is Aman. i am a web developer",
    },
    {
      rollNo: 2,
      name: "Bobby",
      age: 21,
      desc: "This is Bobby. i am a react developer ",
    },
    {
      rollNo: 3,
      name: "Mike",
      age: 22,
      desc: "This is Mike. i am a java developer",
    },
    {
      rollNo: 4,
      name: "Devi",
      age: 23,
      desc: "This is Devi. i am a Designder",
    },
    {
      rollNo: 5,
      name: "Paxton",
      age: 24,
      desc: "This is Paxton. i am a node developer",
    },
    {
      rollNo: 6,
      name: "Aneesha",
      age: 25,
      desc: "This is Aneesha i am a css developer",
    },
  ];
  return (
    <div className="pl-24 pt-7">
      <div className="bg-blue-50 rounded px-4 py-2 mr-20 mt-10">
        <StackedList students={students} />
      </div>
    </div>
  );
};

export default DynamicPage;
