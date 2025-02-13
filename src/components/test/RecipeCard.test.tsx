import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, it, expect } from 'vitest';

import RecipeCard from "../RecipeCard";

describe("RecipeCard Component", () => {
  it("renders the Shopping Now button", () => {
    render(<RecipeCard />);
    const buttonElement = screen.getByText(/Shopping Now/i);
    expect(buttonElement).toBeTruthy();
  });

  
  it("renders the Cooking Illustration image", () => {
    render(<RecipeCard />);
    const imageElement = screen.getByAltText(/Cooking Illustration/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("renders the title text", () => {
    render(<RecipeCard />);
    const titleElement = screen.getByText(/Delicious Recipes/i);
    expect(titleElement).toBeInTheDocument();
  });
  
});