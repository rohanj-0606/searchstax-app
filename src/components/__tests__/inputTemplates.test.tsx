import { render, screen, fireEvent } from "@testing-library/react";
import { InputTemplate } from "../inputTemplates"; // Adjust based on whether it's a named export
// import { ISearchstaxSuggestion } from "@searchstax-inc/searchstudio-ux-js";

export interface ISearchstaxSuggestion {
  id: number;
  name: string;
}

// Mock data and functions
const mockSuggestions: ISearchstaxSuggestion[] = [
  { id: 1, name: "Suggestion 1" },
  { id: 2, name: "Suggestion 2" },
];

const mockOnMouseLeave = jest.fn();
const mockOnMouseOver = jest.fn();
const mockOnMouseClick = jest.fn();

describe("InputTemplate component", () => {
  test("renders input with suggestions", () => {
    render(
      <InputTemplate
        suggestions={mockSuggestions}
        onMouseLeave={mockOnMouseLeave}
        onMouseOver={mockOnMouseOver}
        onMouseClick={mockOnMouseClick}
      />
    );

    const inputElement = screen.getByPlaceholderText(/Search.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("updates input value on typing", () => {
    render(
      <InputTemplate
        suggestions={mockSuggestions}
        onMouseLeave={mockOnMouseLeave}
        onMouseOver={mockOnMouseOver}
        onMouseClick={mockOnMouseClick}
      />
    );

    const inputElement = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(inputElement, { target: { value: "test query" } });
    expect(inputElement).toHaveValue("test query");
  });

  test("calls onChange handler when input changes", () => {
    const handleChange = jest.fn();
    render(
      <InputTemplate
        suggestions={mockSuggestions}
        onMouseLeave={mockOnMouseLeave}
        onMouseOver={mockOnMouseOver}
        onMouseClick={mockOnMouseClick}
      />
    );

    const inputElement = screen.getByPlaceholderText(/Search.../i);
    fireEvent.change(inputElement, { target: { value: "test query" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
