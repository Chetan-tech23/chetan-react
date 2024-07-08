import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  /* Redux value - Subscribing to the store using selector */
  const cartItems = useSelector((store) => store.cart.items);

  /**
   *  Context Api
   */
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-green-100 shadow-lg shadow-slate-400">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 space-x-4">
          <li className="px-4 font-bold text-lg">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link
              to="/"
              className={`font-bold text-lg hover:text-blue-500 ${
                location?.pathname === "/"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/about"
              className={`font-bold text-lg hover:text-blue-500 ${
                location.pathname === "/about"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link
              to="/contact"
              className={`font-bold text-lg hover:text-blue-500 ${
                location.pathname === "/contact"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart">
              {/* This avg img code take on google */}
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class={`h-8 w-8 text-black hover:text-blue-500 ${
                    location.pathname === "/cart" ? "text-blue-500" : ""
                  }`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <div className="absolute pl-6">
                    <span class="rounded-full bg-red-500 p-0.1 px-1 text-sm text-red-50">
                      {cartItems.length}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </li>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px-2 font-bold text-lg">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
