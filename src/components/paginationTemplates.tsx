import { IPaginationData } from "@searchstax-inc/searchstudio-ux-js";

export function paginationTemplate(
  paginationData: IPaginationData | null,
  nextPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  previousPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
): React.ReactElement {
  // If no pagination data or no results, return an empty div
  if (!paginationData || paginationData.totalResults === 0) {
    return <div />;
  }

  return (
    <div className="searchstax-pagination-container">
      <div className="searchstax-pagination-content">
        {/* Link for navigating to the previous page */}
        <a
          className="searchstax-pagination-previous"
          style={paginationData.isFirstPage ? { pointerEvents: "none" } : {}} // Disable if on the first page
          onClick={(e) => previousPage(e)}
          tabIndex={0}
          id="searchstax-pagination-previous"
        >
          &lt; Previous
        </a>

        {/* Pagination details showing the current result range and total results */}
        <div className="searchstax-pagination-details">
          {paginationData.startResultIndex} - {paginationData.endResultIndex} of{" "}
          {paginationData.totalResults}
        </div>

        {/* Link for navigating to the next page */}
        <a
          className="searchstax-pagination-next"
          style={paginationData.isLastPage ? { pointerEvents: "none" } : {}} // Disable if on the last page
          onClick={(e) => nextPage(e)}
          tabIndex={0}
          id="searchstax-pagination-next"
        >
          Next &gt;
        </a>
      </div>
    </div>
  );
}

export default paginationTemplate;
