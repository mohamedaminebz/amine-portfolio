import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n";

describe("App", () => {
  it("renders the main landmark and skip link", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /skip to content|aller au contenu/i }),
    ).toHaveAttribute("href", "#main-content");
  });

  it("renders every main section", () => {
    render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
    );

    for (const id of ["about", "timeline", "projects", "skills", "contact"]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });
});
