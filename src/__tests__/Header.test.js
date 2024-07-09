import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from ".././utils/redux/appStore";

describe("Header Component test cases", () => {
  it("Should render Header component with Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    // Assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header component with Cart 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-0");

    // Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header component with Cart items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // with using regex
    const cartItems = screen.getByText(/Cart/);

    // Assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    // Assertion
    expect(logoutButton).toBeInTheDocument();
  });
});
