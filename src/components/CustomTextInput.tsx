import { forwardRef } from "react";
import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput(
  {
    searchText,
    setSearchText,
    searchResult,
    setCount,
    count,
    setSearchResult,
    setIsApiCall,
  }: any,
  ref: any
) {
  return (
    <div className="mainInputContainer">
      <input
        type="text"
        onKeyDown={(e) => {
          logicObject.handleKeyDownAndUp(
            e,
            searchResult,
            count,
            setCount,
            ref,
            setSearchText,
            setSearchResult,
            setIsApiCall
          );
        }}
        placeholder="Enter search"
        value={searchText}
        onChange={(e) => logicObject.handleChange(e, setSearchText,setIsApiCall)}
      />
    </div>
  );
}

export default forwardRef(CustomTextInput);
