import { ISearchstaxSuggestion } from "@searchstax-inc/searchstudio-ux-js";
import React, { useState } from "react";

export function InputTemplate(
  suggestions: ISearchstaxSuggestion[],
  onMouseLeave: () => void,
  onMouseOver: (suggestion: ISearchstaxSuggestion) => void,
  onMouseClick: () => void
): React.ReactElement {
  // State to manage the input value and focus status
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  // Show suggestions only when the input is focused and suggestions exist
  const showSuggestions = isFocused && suggestions.length > 0;

  return (
    <div className="search-input-wrapper">
      {/* Input field for searching */}
      <input
        type="text"
        id="searchstax-search-input"
        className="search-input"
        placeholder="Search keyword..."
        aria-label="search"
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)} // Focus handling
        onBlur={() => setIsFocused(false)} // Blur handling
      />

      {/* Suggestions dropdown */}
      {showSuggestions && (
        <div className="autosuggest-container" onMouseLeave={onMouseLeave}>
          {suggestions.map((suggestion) => (
            <div
              className="autosuggest-item"
              key={suggestion.term}
              onMouseOver={() => onMouseOver(suggestion)} // Highlight suggestion on hover
              onMouseDown={onMouseClick} // Select suggestion on click
            >
              {/* Display the suggestion term with HTML rendering */}
              <div
                className="autosuggest-item-term"
                dangerouslySetInnerHTML={{ __html: suggestion.term }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
