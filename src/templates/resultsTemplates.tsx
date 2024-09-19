import {
  ISearchstaxParsedResult,
  ISearchstaxSearchMetadata,
} from "@searchstax-inc/searchstudio-ux-js";

export function noResultTemplate(
  searchTerm: string,
  metaData: ISearchstaxSearchMetadata | null,
  executeSearch: (searchTerm: string) => void
): React.ReactElement {
  return (
    <div className="no-results-container">
      <p className="no-results-message">
        No results found for <strong>"{searchTerm}"</strong>.
        {metaData?.spellingSuggestion && (
          <>
            {" "}
            Try searching for{" "}
            <a
              href="#"
              className="suggestion-link"
              onClick={(e) => {
                e.preventDefault();
                executeSearch(metaData.spellingSuggestion);
              }}
            >
              {metaData.spellingSuggestion}
            </a>
            ?
          </>
        )}
      </p>
      <ul className="no-results-tips">
        <li>Explore related terms or topics to refine your search.</li>
        <li>Click the ‘X’ in the search box to start a new search.</li>
      </ul>
    </div>
  );
}

export function resultsTemplate(
  searchResults: ISearchstaxParsedResult[],
  resultClicked: (
    result: ISearchstaxParsedResult,
    event: React.MouseEvent | React.KeyboardEvent
  ) => void
): React.ReactElement {
  return (
    <div className="result-column">
      <div className="search-results-container">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              key={result.uniqueId}
              className="search-result-item"
              tabIndex={0}
            >
              {result.ribbon && (
                <div className="searchstax-search-result-ribbon">
                  {result.ribbon}
                </div>
              )}{" "}
              <a
                href={result.url ? result.url : "#"}
                className="search-result-link"
                target="_blank" // Ensure it opens in a new tab
                rel="noopener noreferrer" // Security measure
                // onClick={(event) => {
                //   console.log("clicked");
                //   // Call resultClicked to handle additional logic if needed
                //   resultClicked(result, event);
                // }}
                // onKeyDown={(event) => {
                //   if (event.key === "Enter" || event.key === " ") {
                //     resultClicked(result, event);
                //   }
                // }}
              >
                <div className="search-result-title">{result.title}</div>
                <div className="search-result-snippet">
                  {result.description}
                </div>
              </a>
            </div>
          ))
        ) : (
          <div className="no-results-message">No results found.</div>
        )}
      </div>{" "}
    </div>
  );
}
