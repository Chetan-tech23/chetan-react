import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

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
          <li className="px-4 hover:text-blue-500 font-bold text-lg">Cart</li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
