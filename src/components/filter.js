import React from "react";
import './filter.css';

const Filter = (props) => {
  return (
    <div className="FilterName">
      {/* {console.log(inputText)} */}
      <input type="text" onChange={(e) => props.setinputText(e.target.value)} />
      <input type="text" onChange={(e) => props.setInputrate(e.target.value)} />
    </div>
  );
};
export default Filter;

//include
