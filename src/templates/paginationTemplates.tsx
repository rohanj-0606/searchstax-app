import { IPaginationData } from "@searchstax-inc/searchstudio-ux-js";

export function paginationTemplate(
  paginationData: IPaginationData | null,
  nextPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void,
  previousPage: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
): React.ReactElement {
  if (!paginationData || paginationData.totalResults === 0) {
    // Return an empty div if there's no pagination data or no results
    return <div />;
  }

  return (
    <div className="searchstax-pagination-container">
      <div className="searchstax-pagination-content">
        <a
          className="searchstax-pagination-previous"
          style={paginationData.isFirstPage ? { pointerEvents: "none" } : {}}
          onClick={(e) => previousPage(e)}
          tabIndex={0}
          id="searchstax-pagination-previous"
        >
          {" "}
          &lt; Previous{" "}
        </a>
        <div className="searchstax-pagination-details">
          {paginationData.startResultIndex} - {paginationData.endResultIndex} of{" "}
          {paginationData.totalResults}
        </div>
        <a
          className="searchstax-pagination-next"
          style={paginationData.isLastPage ? { pointerEvents: "none" } : {}}
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
