import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import useRestaurantCards from "../utils/hooks/useRestaurantCards";

const Body = () => {
  const listOfRestaurant = useRestaurantCards();
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const onlineStatus = useOnlineStatus();

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
      <div className="search-filter-container">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchTxt}
            onChange={(e) => {
              setSearchTxt(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
        <div className="filter">
          <button
            className="filter-btn"
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
            className="filter-cancel-btn"
            onClick={() => {
              setFilterRestList(listOfRestaurant);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="rest-container">
        {filterRestList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestCard restObj={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
