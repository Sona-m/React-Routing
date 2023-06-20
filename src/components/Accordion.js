import React, { useState } from "react";
import { GrFormDown, GrFormPrevious } from "react-icons/gr";

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1); // -1 is the default value

  const handleClick = (index) => {
    {
      expendedIndex === index ? setExpendedIndex(-1) : setExpendedIndex(index);
    }
  };
  return (
    <div className="border-t border-x rounded">
      {items.map((item, index) => {
        // initial value of index is 0
        const isExpended = index === expendedIndex; // index is 0, expendedIndex is -1, so isExpended is false
        const icons = (
          <span className="text-2xl">
            {isExpended ? <GrFormDown /> : <GrFormPrevious />}
          </span>
        );
        return (
          <div key={item.id}>
            <div
              className="flex  justify-between p-3 bg-gray-50 border-b item-center cursor-pointer"
              onClick={() => handleClick(index)}
            >
              {item.label}
              {icons}
            </div>
            {isExpended && <div className="border-b p-5">{item.content} </div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
