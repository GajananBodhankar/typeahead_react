import "../Styles/input.css";
import logicObject from "./Logic";
function CustomTextInput({
  searchText,
  setSearchText,
  searchResult,
  count,
  setCount,
}: any) {
  return (
    <div className="mainInputContainer">
      <input
        type="text"
        onKeyDown={(e) => {
          logicObject.handleKeyDownAndUp(e, searchResult, setCount);
        }}
        placeholder="Enter search"
        value={searchText}
        onChange={(e) => logicObject.handleChange(e, searchText, setSearchText)}
      />
    </div>
  );
}

export default CustomTextInput;
