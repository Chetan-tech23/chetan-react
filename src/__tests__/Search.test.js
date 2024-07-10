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
  // beforeAll(() => {
  //   console.log("Run this functon before all in one time");
  // });

  // beforeEach(() => {
  //   console.log("Run this function before each an every test case");
  // });

  // afterAll(() => {
  //   console.log("Run this functon after all in one time");
  // });

  // afterEach(() => {
  //   console.log("Run this function after each an every test case");
  // });

  it("Should search Reslist of burger input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardBeforeSearch = screen.getAllByTestId("res-card");
    expect(cardBeforeSearch.length).toBe(18);

    const serachBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(serachBtn);

    const cardAfterSearch = screen.getAllByTestId("res-card");
    expect(cardAfterSearch.length).toBe(2);
  });

  it("Should filter Top rated restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardBeforeFilter = screen.getAllByTestId("res-card");
    expect(cardBeforeFilter.length).toBe(18);

    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });

    fireEvent.click(topRatedBtn);

    const cardAfterFilter = screen.getAllByTestId("res-card");
    expect(cardAfterFilter.length).toBe(16);
  });
});
