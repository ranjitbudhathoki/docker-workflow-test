import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

describe("App", () => {
  test("renders Vite and React logos", () => {
    render(<App />);
    const viteLogo = screen.getByAltText(/vite logo/i);
    const reactLogo = screen.getByAltText(/react logo/i);
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });
});
