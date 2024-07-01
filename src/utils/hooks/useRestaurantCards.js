import { useEffect, useState } from "react";
import { RES_CARDS } from "../constants";

const useRestaurantCards = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    const apiData = await fetch(RES_CARDS);

    const jsonData = await apiData.json();
    setListOfRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log(">>>>>> ", listOfRestaurant);
  return listOfRestaurant;
};

export default useRestaurantCards;
