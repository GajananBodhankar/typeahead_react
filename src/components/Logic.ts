import { ChangeEvent, SetStateAction } from "react";

class Logic {
  constructor() {}
  async apiCall(query: any) {
    try {
      let result = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      let data = await result.json();
      console.log(data);
      return data?.recipes;
    } catch (error) {
      console.log(JSON.stringify(error));
      alert("Error fetching the data");
    }
  }
  handleChange(
    e: ChangeEvent<HTMLInputElement>,
    search: any,
    setSearch: (arg0: any) => void
  ) {
    setSearch(e.target.value);
  }
  async handleDebounce(
    searchText: string,
    setError: { (value: SetStateAction<string>): void; (arg0: string): void },
    setSearchResult: { (value: any): void; (arg0: never[]): void },
    isLoading: boolean,
    setIsLoading: {
      (value: SetStateAction<boolean>): void;
      (arg0: boolean): void;
    }
  ) {
    let timer: any;
    setSearchResult([]);
    setError("");
    setIsLoading(true);

    if (searchText) {
      timer = setTimeout(async () => {
        let data = await this.apiCall(searchText);
        if (data?.length == 0) {
          setError("No data found");
          setSearchResult([]);
        } else {
          setSearchResult(data);
          localStorage.setItem(searchText, JSON.stringify(data));
          setError("");
        }
        setIsLoading(false);
      }, 500);
    } else {
      setSearchResult([]);
      setError("");
      setIsLoading(false);
    }
    return timer;
  }
  handleKeyDownAndUp(
    e: { key: string },
    searchResult: string | any[],
    setCount: (arg0: { (prev: any): number; (prev: any): any }) => void
  ) {
    if (e.key == "ArrowUp") {
      setCount((prev) => {
        if (prev <= 0) {
          return searchResult.length - 1;
        } else {
          return prev - 1;
        }
      });
    } else if (e.key == "ArrowDown") {
      setCount((prev) => {
        if (prev == searchResult.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }
  }
}

//{text.slice(0, text.toLowerCase().indexOf(search))}
//  <span>

// </span>

let logicObject = new Logic();

export default logicObject;
