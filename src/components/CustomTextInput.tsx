import React from "react";
import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput({ searchText, setSearchText }: any) {
  return (
    <div className="mainInputContainer">
      <input
        type="text"
        onKeyDown={(e) => console.log(e.key,e.key=='ArrowDown')}
        placeholder="Enter search"
        value={searchText}
        onChange={(e) => logicObject.handleChange(e, searchText, setSearchText)}
      />
    </div>
  );
}

export default CustomTextInput;
