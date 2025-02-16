import { render, screen,fireEvent  } from "@testing-library/react";
import { describe, it,test, expect } from 'vitest';
import '@testing-library/jest-dom';
import RecipeCard from "../RecipeCard";

describe("RecipeCard Component", () => {
 

  test("renders the Shopping Now button", () => {
    render(<RecipeCard />);
    const buttonElement = screen.getByText(/Shopping Now/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the Cooking Illustration image", () => {
    render(<RecipeCard />);
    const imageElement = screen.getByAltText(/Cooking Illustration/i);
    expect(imageElement).toBeInTheDocument();
  });

  it("renders the title text", () => {
    render(<RecipeCard />);
    const titleElement = screen.getByText(/Healthy Meals/i);
    expect(titleElement).toBeInTheDocument();
  });
  it("renders the description text", () => {
    render(<RecipeCard />);
    const descriptionElement = screen.getByText(/Discover easy and healthy recipes for every day./i);
    expect(descriptionElement).toBeInTheDocument();
  });
  it('Debe reaccionar correctamente al hacer clic en el botón', () => {
    const { getByText } = render(<RecipeCard />);
    const button = getByText(/Shopping Now/i);
    fireEvent.click(button);
    expect(button).toBeTruthy(); // Aquí puedes agregar más lógica si el botón debe realizar alguna acción
});

  
});