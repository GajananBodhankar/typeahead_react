import React, { useEffect, useState } from "react";
import "../Styles/main.css";
import CustomTextInput from "./CustomTextInput";
import Suggestion from "./Suggestion";
import logicObject from "./Logic";
function MainComponent() {
  const [searchResult, setSearchResult] = useState<any>([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let timer=logicObject.handleDebounce(searchText, setError, setSearchResult);
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  return (
    <div className="mainContainer">
      <CustomTextInput searchText={searchText} setSearchText={setSearchText} />
      <Suggestion data={searchResult} isLoading={isLoading} error={error} />
    </div>
  );
}

export default MainComponent;
