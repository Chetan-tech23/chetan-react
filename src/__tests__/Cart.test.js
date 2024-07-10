import { fireEvent, render, screen } from "@testing-library/react";
import RestMenu from "../components/RestMenu";
import Header from "../components/Header";
import MOCK_DATA from "./moks/mockRestMenu.json";
import { act } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

describe("CART FLOW TEST CASES", () => {
  it("Should Load Restaurant Menu Component", async () => {
    await act(() =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionPanel = screen.getByText("Party Combo (11)");
    fireEvent.click(accordionPanel);

    expect(screen.getAllByTestId("food-item").length).toBe(11);

    expect(screen.getByText("Cart-0")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart-1")).toBeInTheDocument();
  });
});
