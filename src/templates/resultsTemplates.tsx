import {
  ISearchstaxParsedResult,
  ISearchstaxSearchMetadata,
} from "@searchstax-inc/searchstudio-ux-js";

/**
 * Template for when no search results are found.
 * Displays the searched term and offers a spelling suggestion if available.
 *
 * @param {string} searchTerm - The term that was searched.
 * @param {ISearchstaxSearchMetadata | null} metaData - Metadata including any spelling suggestions.
 * @param {Function} executeSearch - Function to execute the search with the suggested term.
 * @returns {React.ReactElement} - JSX for no results message and suggestion.
 */
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
                executeSearch(metaData.spellingSuggestion); // Executes search with spelling suggestion
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
      </ul>
    </div>
  );
}

/**
 * Template for displaying search results.
 * Each result includes a title, snippet, and an optional ribbon. Clicking opens the result in a new tab.
 *
 * @param {ISearchstaxParsedResult[]} searchResults - List of search results.
 * @param {Function} resultClicked - Function to handle when a result is clicked.
 * @returns {React.ReactElement} - JSX to display the list of search results or a no results message.
 */
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
              tabIndex={0} // Makes the item focusable
            >
              {/* Display ribbon if available */}
              {result.ribbon && (
                <div className="searchstax-search-result-ribbon">
                  {result.ribbon}
                </div>
              )}
              {/* Result link and details */}
              <a
                href={result.url ? result.url : "#"}
                className="search-result-link"
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Prevent security vulnerability
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
      </div>
    </div>
  );
}
