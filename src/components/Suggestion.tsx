import React, { useEffect } from "react";

function Suggestion({ data, isLoading, error }: any) {
  return (
    <div className="mainSuggestionContainer">
      {error && <p>{error}</p>}
      {data?.length > 0 &&
        data.map(
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
          ) => <p>{item?.name}</p>
        )}
    </div>
  );
}

export default React.memo(Suggestion);
