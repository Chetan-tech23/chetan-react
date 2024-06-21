import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterRestList, setFilterRestList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await apiData.json();
    console.log(jsonData);
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

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
