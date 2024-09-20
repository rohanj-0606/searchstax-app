import { ISearchstaxSearchSortingData } from "@searchstax-inc/searchstudio-ux-js";

/**
 * Template for rendering the search sorting dropdown.
 * Displays sorting options if search results or external promotions are available.
 *
 * @param {ISearchstaxSearchSortingData | null} sortingData - Sorting data from SearchStax.
 * @param {Function} orderChange - Callback function triggered when the sort order changes.
 * @param {string} selectedSorting - Currently selected sorting option.
 * @returns {React.ReactElement} - JSX for sorting dropdown.
 */
export function searchSortingTemplate(
  sortingData: null | ISearchstaxSearchSortingData,
  orderChange: (value: string) => void,
  selectedSorting: string
) {
  return (
    <>
      {/* Display sorting options if search executed and results are available */}
      {sortingData &&
        sortingData.searchExecuted &&
        sortingData.hasResultsOrExternalPromotions && (
          <div className="searchstax-sorting-container">
            <label
              className="searchstax-sorting-label"
              htmlFor="searchstax-search-order-select"
            >
              Sort By
            </label>
            <select
              id="searchstax-search-order-select"
              className="searchstax-search-order-select"
              value={selectedSorting}
              onChange={(e) => orderChange(e.target.value)} // Handle sort order change
            >
              {/* Render sorting options dynamically */}
              {sortingData.sortOptions.map((sortOption) => (
                <option key={sortOption.key} value={sortOption.key}>
                  {sortOption.value}
                </option>
              ))}
            </select>
          </div>
        )}
    </>
  );
}
