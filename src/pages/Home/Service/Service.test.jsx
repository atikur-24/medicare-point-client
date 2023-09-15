import { render, screen } from "@testing-library/react";
import Service from "./Service";

it("Service section should have 4 cards", () => {
  render(<Service />);
  const cardsContainer = screen.getByTestId("cards-container"); // Replace "cards-container" with the actual data-testid or selector for your container
  const cards = cardsContainer.querySelectorAll(".serviceCard"); // Replace ".card" with the actual selector for your card components
  expect(cards.length).toBe(4);
});
