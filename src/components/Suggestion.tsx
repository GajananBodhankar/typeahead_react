import React, { forwardRef } from "react";
import { Audio, ThreeDots } from "react-loader-spinner";
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
function Suggestion(
  { data, isLoading, error, searchText, count }: any,
  ref: React.LegacyRef<HTMLInputElement> | undefined
) {
  console.log(isLoading, error, searchText, data);
  // const scrollRef = useRef<any>(null);
  return (
    <div
      ref={ref}
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
              <p
                key={index}
                style={{
                  backgroundColor: count == index ? "#e6e6e6" : "white",
                }}
              >
                <SetHighlight text={item.name} search={searchText} />
              </p>
            )
          )
        : isLoading &&
          !error && (
            <div className="loading">
              <p>Loading</p>
              <ThreeDots
                visible={true}
                height="50"
                width="50"
                color="grey"
                radius="9"
                ariaLabel="three-dots-loading"
              />
            </div>
          )}
    </div>
  );
}

export default React.memo(forwardRef(Suggestion));
