import Link from "next/link";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
function SalonSearch() {
  const items = [
    {
      id: 0,
      name: "Noida",
    },
    {
      id: 1,
      name: "Delhi",
    },
    {
      id: 2,
      name: "Basic",
    },
    {
      id: 3,
      name: "PHP",
    },
    {
      id: 4,
      name: "Java",
    },
  ];
  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    console.log(result);
  };

  const handleOnSelect = (item) => {
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const handleOnClear = () => {
    console.log("Cleared");
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">id: {item.id}</span>
        <span className="result-span">name: {item.name}</span>
      </div>
    );
  };

  return (
    <>
    <div className="serch-text">
<h1>Discover the best salons near you</h1>
      </div>
      <div className="salon-search">
              <ReactSearchAutocomplete
                  placeholder={"Search City"}
                  items={items}
                  onSearch={handleOnSearch}
                  onHover={handleOnHover}
                  onSelect={handleOnSelect}
                  onFocus={handleOnFocus}
                  onClear={handleOnClear}
                  styling={{ zIndex: 4 }}
                 />
              <div className="salon-search btn">
                  <Link href={"#"}>SEARCH</Link>
              </div>
          </div></>
  );
}

export default SalonSearch;
