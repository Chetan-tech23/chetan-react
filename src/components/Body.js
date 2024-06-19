import RestCard from "./RestCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [allRestList, setAllRestList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.528913&lng=73.87441989999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await apiData.json();
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filterList);
          }}
        >
          High Rated Restaurants
        </button>
        <button
          className="filter-cancel-btn"
          onClick={() => {
            setListOfRestaurant(allRestList);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="rest-container">
        {listOfRestaurant.map((restaurant) => (
          <RestCard key={restaurant.info.id} restObj={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
