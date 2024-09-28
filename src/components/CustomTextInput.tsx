import { forwardRef } from "react";
import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput(
  { searchText, setSearchText, searchResult, setCount }: any,
  ref: {
    current: {
      scroll: (arg0: { top: any; behavior: string }) => void;
      scrollTop: number;
    };
  }
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
        onChange={(e) => logicObject.handleChange(e, searchText, setSearchText)}
      />
    </div>
  );
}

export default forwardRef(CustomTextInput);
