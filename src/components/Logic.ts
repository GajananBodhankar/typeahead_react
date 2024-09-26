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
  handleDebounce(
    searchText: string,
    setError: { (value: SetStateAction<string>): void; (arg0: string): void },
    setSearchResult: { (value: any): void; (arg0: never[]): void }
  ) {
    let timer: any;
    if (searchText) {
      timer = setTimeout(async () => {
        let data = await this.apiCall(searchText);
        if (data?.length == 0) {
          setError("No data found");
        } else {
          setSearchResult(data);
          setError("");
        }
      }, 400);
    } else {
      setSearchResult([]);
      setError("");
    }
    return timer;
  }
}

let logicObject = new Logic();

export default logicObject;
