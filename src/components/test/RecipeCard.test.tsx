import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it,test, expect } from 'vitest';
import '@testing-library/jest-dom';
import RecipeCard from "../RecipeCard";

describe("RecipeCard Component", () => {
  it("matches the snapshot", () => {
    const { asFragment } = render(<RecipeCard />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the Shopping Now button", () => {
    render(<RecipeCard />);
    const buttonElement = screen.getByText(/Shopping Now/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the Cooking Illustration image", () => {
    render(<RecipeCard />);
    const imageElement = screen.getByAltText(/Cooking Illustration/i);
    expect(imageElement).toBeInTheDocument();
  });

  

  
  
});