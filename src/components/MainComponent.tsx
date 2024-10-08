import { useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<any>(null);
  const [isApiCall, setIsApiCall] = useState(true);
  useEffect(() => {
    let timer: any;
    async function getData() {
      if (localStorage.getItem(searchText)) {
        setIsLoading(false);
        setCount(-1);
        setSearchResult(JSON.parse(localStorage.getItem(searchText) ?? ""));
      } else {
        setCount(-1);
        timer = await logicObject.handleDebounce(
          searchText,
          setError,
          setSearchResult,
          setIsLoading
        );
      }
    }
    isApiCall && getData();

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="mainContainer">
      <CustomTextInput
        ref={scrollRef}
        searchText={searchText}
        count={count}
        setSearchText={setSearchText}
        searchResult={searchResult}
        setCount={setCount}
        setSearchResult={setSearchResult}
        setIsApiCall={setIsApiCall}
      />

      {searchText && (
        <Suggestion
          ref={scrollRef}
          count={count}
          data={searchResult}
          isLoading={isLoading}
          error={error}
          searchText={searchText}
          setSearchResult={setSearchResult}
          setSearchText={setSearchText}
          setIsApiCall={setIsApiCall}
        />
      )}
    </div>
  );
}

export default MainComponent;
