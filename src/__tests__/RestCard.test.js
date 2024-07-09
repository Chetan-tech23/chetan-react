import { render, screen } from "@testing-library/react";
import RestCard from "../components/RestCard";
import MOCK_DATA from "../__tests__/moks/resCardMock.json";
import "@testing-library/jest-dom";
import { withHeaderLable } from "../components/RestCard";

describe("RestCard component test cases", () => {
  it("Should render RestCard component with props data", () => {
    render(<RestCard restObj={MOCK_DATA} />);

    const restName = screen.getByText("Samudra Veg");

    // Assertion
    expect(restName).toBeInTheDocument();
  });

  it("Should render RestCard component with Header discount Label", () => {
    const RestCardWithHeader = withHeaderLable(RestCard);

    render(<RestCardWithHeader restObj={MOCK_DATA} />);

    const restCardDiscountLabel = screen.getByText("15% OFF UPTO ₹100");

    // Assertion
    expect(restCardDiscountLabel).toBeInTheDocument();
  });
});
