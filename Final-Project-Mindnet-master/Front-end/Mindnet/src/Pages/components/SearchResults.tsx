import React from "react";
import '../../global.css';

export const SearchResults = ({result}:any) => {
    return <div className="search-result" onClick={(e) => alert(`You clicked on ${result.name}`)}>{result.name}</div>
}