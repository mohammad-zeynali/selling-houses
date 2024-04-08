import { useState } from "react";
import { AllProducts, searchProduct } from "../../../domain/product";

type SearchType = {
  allData: AllProducts;
  setData: React.Dispatch<React.SetStateAction<AllProducts>>;
};
const Search = ({ setData, allData }: SearchType): JSX.Element => {
  const [searchInput, setSearchInput] = useState("");
  const searchHandler = (title: string) => {
    setData(searchProduct(title.trim(), allData)!);
    setSearchInput(title);
  };
  return (
    <div className="max-w-sm mx-auto mt-5 relative">
      <input
        className="w-[96%] py-2 px-2 bg-gray-200 rounded-xl"
        onChange={(e) => searchHandler(e.target.value)}
        value={searchInput}
      />
      {searchInput ? (
        <button
          className="w-6 h-6 absolute top-2 right-1 z-20 cursor-pointer"
          onClick={() => {
            setData(allData);
            setSearchInput("");
          }}
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button className="w-6 h-6 absolute top-2 right-1 z-20 cursor-pointer">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Search;
