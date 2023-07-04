import React from "react";
import '../../global.css'
import { SearchResults } from "./SearchResults";

export const SearchResultsList = ({ results }:any) => {
    return (
        <div className="results-list">
           {results.map((result:any, id:any) => {
                return <SearchResults result={result} key={id}/>;
            })}
        </div>
    )
}