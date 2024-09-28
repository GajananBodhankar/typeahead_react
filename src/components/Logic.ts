import { ChangeEvent, SetStateAction } from "react";

class Logic {
  constructor() {}
  async apiCall(query: any) {
    try {
      let result = await fetch(
        `https://dummyjson.com/recipes/search?q=${query}`
      );
      let data = await result.json();
      return data?.recipes;
    } catch (error) {
      console.log(JSON.stringify(error));
      alert("Error fetching the data");
    }
  }
  handleChange(
    e: ChangeEvent<HTMLInputElement>,
    setSearch: (arg0: any) => void,
    setIsApiCall: (arg0: boolean) => void
  ) {
    setIsApiCall(true);
    setSearch(e.target.value);
  }
  async handleDebounce(
    searchText: string,
    setError: { (value: SetStateAction<string>): void; (arg0: string): void },
    setSearchResult: { (value: any): void; (arg0: never[]): void },
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
      }, 1000);
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
    count: number,
    setCount: (arg0: { (prev: any): number; (prev: any): any }) => void,
    ref: any,
    setSearchText: (arg0: any) => void,
    setSearchResult: (arg0: never[]) => void,
    setIsApiCall: (arg0: boolean) => void
  ) {
    console.log(e.key);
    switch (e.key) {
      case "ArrowUp": {
        setCount((prev) => {
          if (prev <= 0) {
            ref?.current?.scrollTo({
              top: ref?.current?.scrollHeight,
              behavior: "smooth",
            });
            return searchResult.length - 1;
          } else {
            if (prev % 2 == 0) {
              ref?.current?.scrollTo({
                top: ref?.current?.scrollTop - 100,
                behavior: "smooth",
              });
            }
            return prev - 1;
          }
        });
        break;
      }
      case "ArrowDown": {
        setCount((prev) => {
          if (prev == searchResult.length - 1) {
            ref.current?.scroll({
              top: 0,
              behavior: "smooth",
            });
            return 0;
          } else {
            if (prev % 2 == 0 && prev > 0) {
              ref.current?.scroll({
                top: ref?.current.scrollTop + 110,
                behavior: "smooth",
              });
            }
            return prev + 1;
          }
        });
        break;
      }
      case "Enter": {
        if (count >= 0) {
          setSearchText(searchResult[count].name);
          setSearchResult([]);
          setIsApiCall(false);
        }
      }
    }
  }
}

let logicObject = new Logic();

export default logicObject;
