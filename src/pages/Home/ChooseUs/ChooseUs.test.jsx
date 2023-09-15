import { render, screen } from "@testing-library/react";
import ChooseUs from "./ChooseUs";

it("Choose Us section should have 4 cards", () => {
  render(<ChooseUs />);
  const cardsContainer = screen.getByTestId("chooseUs-container"); // Replace "cards-container" with the actual data-testid or selector for your container
  const cards = cardsContainer.querySelectorAll(".chooseUsCard"); // Replace ".card" with the actual selector for your card components
  expect(cards.length).toBe(4);
});
