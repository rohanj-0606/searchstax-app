/**
 * App Component integrates SearchStax Site Search UI Kit with a custom UI.
 * Widgets for search input, sorting, pagination, facets, and results are used.
 * Custom templates are implemented for input, results, sorting, facets, and pagination.
 *
 * State:
 * - searchstaxInstance: Stores the initialized Searchstax instance.
 *
 * Functions:
 * - beforeSearch: Modifies search properties before triggering the search.
 * - afterSearch: Processes search results after they return.
 * - initialized: Sets the Searchstax instance once initialized.
 */

import { useState } from "react";
import "./App.scss";
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
  SearchstaxFacetsWidget,
  SearchstaxSortingWidget,
} from "@searchstax-inc/searchstudio-ux-react";
import {
  ISearchObject,
  ISearchstaxParsedResult,
  Searchstax,
} from "@searchstax-inc/searchstudio-ux-js";
import { InputTemplate } from "./components/inputTemplates.js";
import {
  noResultTemplate,
  resultsTemplate,
} from "./components/resultsTemplates.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { config, renderConfig } from "../config.js";
import { paginationTemplate } from "./components/paginationTemplates.js";
import {
  facetsTemplateDesktop,
  facetsTemplateMobile,
} from "./components/facetTemplates.js";
import { searchSortingTemplate } from "./components/searchSortingTemplate.js";

import DummyComponent from "./components/DummyComponent.js";

function App() {
  const [searchstaxInstance, setSearchstaxInstance] =
    useState<Searchstax | null>(null);

  // Modify search properties before triggering the search
  function beforeSearch(props: ISearchObject) {
    return { ...props };
  }

  // Process search results after they return
  function afterSearch(results: ISearchstaxParsedResult[]) {
    return [...results];
  }

  // Set the Searchstax instance once initialized
  function initialized(searchstax: Searchstax) {
    setSearchstaxInstance(searchstax);
  }

  return (
    <>
      <Header />
      {/* <DummyComponent /> */}
      <SearchstaxWrapper
        searchURL={config.searchURL}
        suggesterURL={config.suggesterURL}
        // trackApiKey={config.trackApiKey}
        searchAuth={config.searchAuth}
        beforeSearch={beforeSearch}
        afterSearch={afterSearch}
        authType="token"
        language={config.language}
        initialized={initialized}
      >
        <div className="searchstax-page-layout-container">
          <div className="search-bar-row">
            <SearchstaxInputWidget
              inputTemplate={InputTemplate}
              suggestAfterMinChars={
                renderConfig.inputWidget.suggestAfterMinChars
              }
            />
          </div>

          <div className="sorting-row">
            <SearchstaxSortingWidget
              searchSortingTemplate={searchSortingTemplate}
            />
          </div>

          <div className="search-layout-row">
            <SearchstaxFacetsWidget
              facetingType="or"
              itemsPerPageDesktop={4}
              itemsPerPageMobile={3}
              facetsTemplateDesktop={facetsTemplateDesktop}
              facetsTemplateMobile={facetsTemplateMobile}
            />
            <SearchstaxResultWidget
              resultsPerPage={10}
              renderMethod="pagination"
              resultsTemplate={resultsTemplate}
              noResultTemplate={noResultTemplate}
            />
          </div>

          <div className="search-pagination-row">
            <SearchstaxPaginationWidget
              paginationTemplate={paginationTemplate}
            />
          </div>
        </div>
      </SearchstaxWrapper>
      <Footer />
    </>
  );
}

export default App;
