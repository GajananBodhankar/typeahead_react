import React from "react";
import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput({ searchText, setSearchText }: any) {
  return (
    <div className="mainInputContainer">
      <input type="text" placeholder="Enter search" value={searchText} onChange={(e)=>logicObject.handleChange(e,searchText,setSearchText)} />
    </div>
  );
}

export default CustomTextInput;
