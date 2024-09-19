import {
  IFacetData,
  IFacetValueData,
  IFacetsTemplateData,
} from "@searchstax-inc/searchstudio-ux-js";
import { createRef } from "react";

export function facetsTemplateDesktop(
  facetsTemplateData: IFacetsTemplateData | null,
  facetContainers: {
    [key: string]: React.LegacyRef<HTMLDivElement> | undefined;
  },
  isNotDeactivated: (name: string) => boolean,
  toggleFacetGroup: (name: string) => void,
  selectFacet: (
    index: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetValueData,
    isInput: boolean
  ) => void,
  isChecked: (facetValue: IFacetValueData) => boolean | undefined,
  showMoreLess: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetData
  ) => void
) {
  return facetsTemplateData ? (
    <div className="filter-column">
      <div className="searchstax-facets-container-desktop">
        {facetsTemplateData?.facets.map((facet) => (
          <div
            className={`searchstax-facet-container ${
              isNotDeactivated(facet.name) ? "active" : ""
            }`}
            key={facet.name + "desktop"}
          >
            <div
              className="searchstax-facet-title-container"
              onClick={() => toggleFacetGroup(facet.name)}
            >
              <div className="searchstax-facet-title">{facet.label}</div>
              <div className="searchstax-facet-title-arrow active"></div>
            </div>
            <div
              className="searchstax-facet-values-container"
              aria-live="polite"
            >
              {facet.values.map((facetValue, key) => {
                const refKey = key + facet.name;
                facetContainers[refKey] = createRef();
                return (
                  <div
                    key={facetValue.value + facetValue.parentName}
                    className={`searchstax-facet-value-container ${
                      facetValue.disabled
                        ? "searchstax-facet-value-disabled"
                        : ""
                    }`}
                    ref={facetContainers[refKey]}
                  >
                    <div className={`searchstax-facet-input desktop-${refKey}`}>
                      <input
                        type="checkbox"
                        className="searchstax-facet-input-checkbox"
                        checked={isChecked(facetValue)}
                        readOnly
                        aria-label={`${facetValue.value} ${facetValue.count}`}
                        disabled={facetValue.disabled}
                        onClick={(e) =>
                          selectFacet(refKey, e, facetValue, true)
                        }
                      />
                    </div>
                    <div
                      className="searchstax-facet-value-label"
                      onClick={(e) => selectFacet(refKey, e, facetValue, false)}
                    >
                      {facetValue.value}
                    </div>
                    <div
                      className="searchstax-facet-value-count"
                      onClick={(e) => selectFacet(refKey, e, facetValue, false)}
                    >
                      &nbsp;({facetValue.count})
                    </div>
                  </div>
                );
              })}
              {facet.hasMoreFacets && (
                <div
                  className="searchstax-facet-show-more-container"
                  onClick={(e) => showMoreLess(e, facet)}
                >
                  <div
                    className={`searchstax-facet-show-${
                      facet.showingAllFacets ? "less" : "more"
                    }-button searchstax-facet-show-button`}
                  >
                    {facet.showingAllFacets ? "less" : "more"}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div />
  );
}

export function facetsTemplateMobile(
  facetsTemplateData: IFacetsTemplateData | null,
  selectedFacets: IFacetValueData[],
  facetContainers: {
    [key: string]: React.LegacyRef<HTMLDivElement> | undefined;
  },
  isNotDeactivated: (name: string) => boolean,
  toggleFacetGroup: (name: string) => void,
  selectFacet: (
    index: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetValueData,
    isInput: boolean,
    isMobile?: boolean
  ) => void,
  isChecked: (facetValue: IFacetValueData) => boolean | undefined,
  unselectFacet: (facet: IFacetValueData) => void,
  showMoreLess: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    data: IFacetData
  ) => void,
  openOverlay: () => void,
  closeOverlay: () => void,
  unselectAll: () => void
) {
  return facetsTemplateData ? (
    <div className="searchstax-facets-container-mobile">
      <div className="searchstax-facets-pills-container">
        <div
          className="searchstax-facets-pill searchstax-facets-pill-filter-by"
          onClick={openOverlay}
        >
          <div className="searchstax-facets-pill-label">Filter By</div>
        </div>
        <div className="searchstax-facets-pills-selected">
          {selectedFacets.map((facet) => (
            <div
              className="searchstax-facets-pill searchstax-facets-pill-facets"
              key={facet.value}
              onClick={() => unselectFacet(facet)}
            >
              <div className="searchstax-facets-pill-label">
                {facet.value} ({facet.count})
              </div>
              <div className="searchstax-facets-pill-icon-close"></div>
            </div>
          ))}
          {selectedFacets.length !== 0 && (
            <div
              className="searchstax-facets-pill searchstax-clear-filters searchstax-facets-pill-clear-all"
              onClick={unselectAll}
            >
              <div className="searchstax-facets-pill-label">Clear Filters</div>
            </div>
          )}
        </div>
        <div
          className={`searchstax-facets-mobile-overlay ${
            facetsTemplateData.overlayOpened ? "searchstax-show" : ""
          }`}
        >
          <div className="searchstax-facets-mobile-overlay-header">
            <div className="searchstax-facets-mobile-overlay-header-title">
              Filter By
            </div>
            <div
              className="searchstax-search-close"
              onClick={closeOverlay}
            ></div>
          </div>
          <div className="searchstax-facets-container-mobile">
            {facetsTemplateData.facets.map((facet) => (
              <div
                key={facet.name + "mobile"}
                className={`searchstax-facet-container ${
                  isNotDeactivated(facet.name) ? "active" : ""
                }`}
              >
                <div
                  className="searchstax-facet-title-container"
                  onClick={() => toggleFacetGroup(facet.name)}
                >
                  <div className="searchstax-facet-title">{facet.label}</div>
                  <div className="searchstax-facet-title-arrow active"></div>
                </div>
                <div
                  className="searchstax-facet-values-container"
                  aria-live="polite"
                >
                  {facet.values.map((facetValue, key) => {
                    const refKey = key + facet.name;
                    facetContainers[refKey] = createRef();
                    return (
                      <div
                        key={facetValue.value + facetValue.parentName}
                        className={`searchstax-facet-value-container ${
                          facetValue.disabled
                            ? "searchstax-facet-value-disabled"
                            : ""
                        }`}
                        ref={facetContainers[refKey]}
                      >
                        <div
                          className={`searchstax-facet-input mobile-${refKey}`}
                        >
                          <input
                            type="checkbox"
                            className="searchstax-facet-input-checkbox"
                            checked={isChecked(facetValue)}
                            readOnly
                            aria-label={`${facetValue.value} ${facetValue.count}`}
                            disabled={facetValue.disabled}
                            onClick={(e) =>
                              selectFacet(refKey, e, facetValue, true, true)
                            }
                          />
                        </div>
                        <div
                          className="searchstax-facet-value-label"
                          onClick={(e) =>
                            selectFacet(refKey, e, facetValue, false)
                          }
                        >
                          {facetValue.value}
                        </div>
                        <div
                          className="searchstax-facet-value-count"
                          onClick={(e) =>
                            selectFacet(refKey, e, facetValue, false)
                          }
                        >
                          ({facetValue.count})
                        </div>
                      </div>
                    );
                  })}
                  {facet.hasMoreFacets && (
                    <div
                      className="searchstax-facet-show-more-container"
                      onClick={(e) => showMoreLess(e, facet)}
                    >
                      <div
                        className={`searchstax-facet-show-${
                          facet.showingAllFacets ? "less" : "more"
                        }-button searchstax-facet-show-button`}
                      >
                        {facet.showingAllFacets ? "less" : "more"}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            className="searchstax-facets-mobile-overlay-done"
            onClick={closeOverlay}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
