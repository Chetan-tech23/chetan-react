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
        <ul className="flex p-4 m-4 space-x-2">
          <li className="px-4 font-bold">
            Online status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2">
            <Link
              to="/"
              className={`font-bold hover:text-blue-500 ${
                location?.pathname === "/"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/about"
              className={`font-bold hover:text-blue-500 ${
                location.pathname === "/about"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/contact"
              className={`font-bold hover:text-blue-500 ${
                location.pathname === "/contact"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li className="px-2">
            <Link
              to="/cart"
              className={`font-bold hover:text-blue-500 ${
                location.pathname === "/contact"
                  ? "text-blue-500 underline underline-offset-2"
                  : ""
              }`}
            >
              Cart-{cartItems.length}
            </Link>
          </li>
          <button
            className="px-2 py-1.5 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="px- font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
