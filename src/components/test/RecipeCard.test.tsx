import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, it, expect } from 'vitest';
import RecipeCard from "../RecipeCard";

describe("RecipeCard Component", () => {
  it("renders the Shopping Now button", () => {
    render(<RecipeCard />);
    const buttonElement = screen.getByText(/Shopping Now/i);
    expect(buttonElement).toBeTruthy();
  });

  
});