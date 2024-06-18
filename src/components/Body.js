import RestCard from "./RestCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restList);

  return (
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
            setListOfRestaurant(restList);
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
