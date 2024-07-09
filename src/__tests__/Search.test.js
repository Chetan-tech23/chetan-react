import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import RES_LIST_DATA from "../__tests__/moks/resDataListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RES_LIST_DATA);
    },
  });
});

describe("Search functionality test cases", () => {
  it("Should render Body component with Search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const serachBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(serachBtn);

    const card = screen.getAllByTestId("res-card");

    // Assertion - screen should  2 cards
    expect(card.length).toBe(2);
  });
});
