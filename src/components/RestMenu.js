import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestMenu from "../utils/hooks/useRestMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordion */}
      {categories.map((category) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestMenu;
