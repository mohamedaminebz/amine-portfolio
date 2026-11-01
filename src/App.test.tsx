import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import "./i18n";

const renderApp = () =>
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );

describe("App", () => {
  it("renders the main landmark and skip link", () => {
    renderApp();

    expect(screen.getByRole("main")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /skip to content|aller au contenu/i }),
    ).toHaveAttribute("href", "#main-content");
  });

  it("renders every main section", () => {
    renderApp();

    for (const id of [
      "top",
      "work",
      "about",
      "journey",
      "notes",
      "arsenal",
      "contact",
    ]) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
  });

  it("orders the page as work, about, journey, notes, arsenal, contact", () => {
    renderApp();

    const order = Array.from(document.querySelectorAll("main > section")).map(
      (section) => section.id,
    );

    expect(order).toEqual([
      "top",
      "work",
      "about",
      "journey",
      "notes",
      "arsenal",
      "contact",
    ]);
  });

  it("does not leak raw translation keys into the page", () => {
    renderApp();

    // A key that is missing from the bundle renders as its own dotted path.
    const keyPattern = /\b(?:v3|v21|a11y|projects|nav)\.[a-z0-9_]+\./i;

    const elements = Array.from(document.querySelectorAll("body *"));
    const offenders = elements.flatMap((element) => {
      const values = [
        element.textContent ?? "",
        ...Array.from(element.attributes).map((attribute) => attribute.value),
      ];
      return values.filter((value) => keyPattern.test(value));
    });

    expect(offenders).toEqual([]);
  });
});
