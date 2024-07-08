import RestCard, { withHeaderLable } from "./RestCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestaurantCards from "../utils/hooks/useRestaurantCards";
import UserContext from "../utils/UserContext";

const Body = () => {
  const listOfRestaurant = useRestaurantCards();
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  const onlineStatus = useOnlineStatus();

  const RestCardWithHeader = withHeaderLable(RestCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    setFilterRestList(listOfRestaurant);
  }, [listOfRestaurant]);

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! Please check you're internet connection.
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex justify-between items-center">
        <div className="search m-4">
          <input
            className=" shadow-xl border border-solid border-black text-start outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            type="text"
            placeholder="🔍 Search"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "🔍 Search")}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg shadow-xl"
            onClick={() => {
              const filterList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
              );
              filterList.length !== 0 && setFilterRestList(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 flex items-center">
          <input
            className="px-2 py-2 mr-4 border border-black shadow-lg rounded-md"
            placeholder="Logged User"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="px-4 py-3 bg-green-100 mr-4 rounded-lg shadow-xl"
            onClick={() => {
              const filterList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestList(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-3 bg-green-100 my-4 rounded-lg shadow-xl"
            onClick={() => {
              setFilterRestList(listOfRestaurant);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestCardWithHeader restObj={restaurant} />
            ) : (
              <RestCard restObj={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
