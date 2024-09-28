import { forwardRef } from "react";
import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput(
  { searchText, setSearchText, searchResult, setCount }: any,
  ref: any
) {
  return (
    <div className="mainInputContainer">
      <input
        type="text"
        onKeyDown={(e) => {
          logicObject.handleKeyDownAndUp(e, searchResult, setCount, ref);
        }}
        placeholder="Enter search"
        value={searchText}
        onChange={(e) => logicObject.handleChange(e,  setSearchText)}
      />
    </div>
  );
}

export default forwardRef(CustomTextInput);
