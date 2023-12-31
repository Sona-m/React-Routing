import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "What is React?",
      content:
        "React is a front end javascript framework React is a front end javascript framework React is a front end javascript framework",
    },
    {
      id: 2,
      label: "Why use React?",
      content:
        "React is a favorite JS library among engineers React is a favorite JS library among engineers React is a favorite JS library among engineers",
    },
    {
      id: 3,
      label: "How do you use React?",
      content:
        "You use React by creating components React is a favorite JS library among engineers React is a favorite JS library among engineers",
    },
  ];
  return (
    <div className="items-center px-48 mt-52">
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
