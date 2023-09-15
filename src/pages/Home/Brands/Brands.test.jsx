import { render, screen } from "@testing-library/react";
import Brands from "./Brands";

it("Brands section should have 8 cards", () => {
  render(<Brands />);
  const cardsContainer = screen.getByTestId("brands-container"); // Replace "cards-container" with the actual data-testid or selector for your container
  const cards2 = cardsContainer.querySelectorAll(".brandsCard"); // Replace ".card" with the actual selector for your card components
  expect(cards2.length).toBe(8);
});
