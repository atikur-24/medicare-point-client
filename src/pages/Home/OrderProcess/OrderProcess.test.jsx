import { render, screen } from "@testing-library/react";
import OrderProcess from "./OrderProcess";

it("Order process section should have 5 cards", () => {
  render(<OrderProcess />);
  const cardsContainer = screen.getByTestId("orderProcess-container"); // Replace "cards-container" with the actual data-testid or selector for your container
  const cards = cardsContainer.querySelectorAll(".orderProcess-card"); // Replace ".card" with the actual selector for your card components
  expect(cards.length).toBe(5);
});
