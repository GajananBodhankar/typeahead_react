import { useEffect, useState } from "react";
import "../Styles/main.css";
import CustomTextInput from "./CustomTextInput";
import Suggestion from "./Suggestion";
import logicObject from "./Logic";
function MainComponent() {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [count, setCount] = useState(-1);
  useEffect(() => {
    let timer: any;
    async function getData() {
      if (localStorage.getItem(searchText)) {
        setIsLoading(false);
        setSearchResult(JSON.parse(localStorage.getItem(searchText) ?? ""));
      } else {
        timer = await logicObject.handleDebounce(
          searchText,
          setError,
          setSearchResult,
          isLoading,
          setIsLoading
        );
      }
    }
    getData();

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="mainContainer">
      <CustomTextInput
        searchText={searchText}
        setSearchText={setSearchText}
        searchResult={searchResult}
        setCount={setCount}
      />
      {searchText && (
        <Suggestion
          count={count}
          data={searchResult}
          isLoading={isLoading}
          error={error}
          searchText={searchText}
        />
      )}
    </div>
  );
}

export default MainComponent;
