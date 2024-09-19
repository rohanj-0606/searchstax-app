import React, { useState } from "react";
import "./App.scss";
import {
  SearchstaxWrapper,
  SearchstaxInputWidget,
  SearchstaxResultWidget,
  SearchstaxPaginationWidget,
  SearchstaxFacetsWidget,
  SearchstaxSortingWidget, // Sorting widget
} from "@searchstax-inc/searchstudio-ux-react";
import { Searchstax } from "@searchstax-inc/searchstudio-ux-js";
import { InputTemplate } from "./templates/inputTemplates";
import {
  noResultTemplate,
  resultsTemplate,
} from "./templates/resultsTemplates";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

//@ts-ignore
import { config, renderConfig } from "../config.js";
import { paginationTemplate } from "./templates/paginationTemplates.js";
import {
  facetsTemplateDesktop,
  facetsTemplateMobile,
} from "./templates/facetTemplates.js";

import { searchSortingTemplate } from "./templates/searchSortingTemplate.js";

function App() {
  const [searchstaxInstance, setSearchstaxInstance] =
    useState<Searchstax | null>(null);

  function beforeSearch(props) {
    const propsCopy = { ...props };
    return propsCopy;
  }

  function afterSearch(results) {
    const copy = [...results];
    return copy;
  }

  function initialized(searchstax) {
    setSearchstaxInstance(searchstax);
  }

  return (
    <>
      <Header />
      <SearchstaxWrapper
        searchURL={config.searchURL}
        suggesterURL={config.suggesterURL}
        trackApiKey={config.trackApiKey}
        searchAuth={config.searchAuth}
        beforeSearch={beforeSearch}
        afterSearch={afterSearch}
        authType={"token"}
        language={config.language}
        initialized={initialized}
      >
        <div className="searchstax-page-layout-container">
          {/* First row: Search bar */}
          <div className="search-bar-row">
            <SearchstaxInputWidget
              inputTemplate={InputTemplate}
              suggestAfterMinChars={
                renderConfig.inputWidget.suggestAfterMinChars
              }
            />
          </div>

          {/* Second row: Sorting widget */}
          <div className="sorting-row">
            <SearchstaxSortingWidget
              searchSortingTemplate={searchSortingTemplate}
            />
          </div>
          {/* Third row: Filter and results */}
          <div className="search-layout-row">
            {/* <div className="filter-column"> */}
            <SearchstaxFacetsWidget
              facetingType="or"
              itemsPerPageDesktop={4}
              itemsPerPageMobile={3}
              facetsTemplateDesktop={facetsTemplateDesktop}
              facetsTemplateMobile={facetsTemplateMobile}
            />
            {/* </div> */}

            {/* <div className="result-column"> */}
            <SearchstaxResultWidget
              resultsPerPage={10}
              renderMethod={"pagination"}
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
