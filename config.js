const config = {
  language: "en",
  searchURL:
    "https://searchcloud-2-us-east-1.searchstax.com/29847/corpsiteuxsamples-1442/emselect",
  suggesterURL:
    "https://searchcloud-2-us-east-1.searchstax.com/29847/corpsiteuxsamples-1442_suggester/emsuggest",
  trackApiKey: "DPAOKNB9c5chZZDwN1Il9dLUCLMGF1ggehy0dWewZwk",
  searchAuth: "b065448ad1484e205f4851f0ce89d128e704e2f4",
  authType: "token",
};

const renderConfig = {
  inputWidget: {
    suggestAfterMinChars: 3,
  },
  facetsWidget: {
    itemsPerPageDesktop: 3,
    itemsPerPageMobile: 99,
    facetingType: "and", // "and" | "or" | "showUnavailable" | "tabs"
  },
  resultsWidget: {
    renderMethod: "pagination", //'infiniteScroll' or 'pagination'
    itemsPerPage: 10,
  },
};

export { config, renderConfig };
