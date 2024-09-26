import React, { useEffect } from "react";
function SetHighlight({ text, search }: any) {
  return (
    <>
      <span>{text.slice(0, text.toLowerCase().indexOf(search))}</span>
      <span style={{ color: "red" }}>
        {text.slice(
          text.toLowerCase().indexOf(search),
          text.toLowerCase().indexOf(search) + search.length
        )}
      </span>
      <span>
        {text.slice(text.toLowerCase().indexOf(search) + search.length)}
      </span>
    </>
  );
}
function Suggestion({ data, isLoading, error, searchText }: any) {
  console.log(isLoading, error,searchText);
  return (
    <div
      className={
        data?.length || error || isLoading
          ? "mainSuggestionContainer"
          : "mainSuggestionEmpty"
      }
    >
      {error && <p>{error}</p>}
      {data?.length > 0
        ? data.map(
            (
              item: {
                name:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              },
              index: any
            ) => (
              <p key={index}>
                <SetHighlight text={item.name} search={searchText} />
                {/* {item} */}
              </p>
            )
          )
        : isLoading && !error && <p>Loading</p>}
    </div>
  );
}

export default React.memo(Suggestion);
