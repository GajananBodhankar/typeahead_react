import React, { forwardRef } from "react";
import Loading from "./Loading";
import SetHighlight from "./SetHighlight";
import logicObject from "./Logic";

function Suggestion(
  {
    data,
    isLoading,
    error,
    searchText,
    count,
    setSearchResult,
    setSearchText,
    setIsApiCall,
  }: any,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  console.log(isLoading, error, searchText, data);
  return (
    <div
      ref={ref}
      className={
        data?.length || error || isLoading
          ? "mainSuggestionContainer"
          : "mainSuggestionEmpty"
      }
    >
      {error && <p>{error} 😶</p>}

      {data?.length > 0
        ? data.map((item: any, index: any) => (
            <p
              key={index}
              style={{
                backgroundColor: count == index ? "#e6e6e6" : "white",
                borderBottom: "0.5px solid grey",
              }}
              onClick={() =>
                logicObject.handleSelect(
                  item,
                  setSearchResult,
                  setSearchText,
                  setIsApiCall
                )
              }
            >
              <SetHighlight text={item.name} search={searchText} />
            </p>
          ))
        : isLoading && !error && <Loading />}
    </div>
  );
}

export default React.memo(forwardRef(Suggestion));
