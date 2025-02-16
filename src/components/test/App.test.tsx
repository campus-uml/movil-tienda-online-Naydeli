import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import App from "../../App";

describe("App Component", () => {
  
  it("matches the snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});