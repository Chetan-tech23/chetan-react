import { render } from "@testing-library/react";
import RestCard from "../components/RestCard";

describe("RestCard component test cases", () => {
  it("Should render RestCard component with props data", () => {
    render(<RestCard />);
  });
});
