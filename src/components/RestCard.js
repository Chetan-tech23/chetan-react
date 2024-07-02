import { CDN_LINK } from "../utils/constants";

const RestCard = (restObj) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    restObj?.restObj?.info;

  return (
    <div className="m-2 p-4 w-[250px] bg-green-100 rounded-lg shadow-lg shadow-gray-400 overflow-hidden hover:shadow-xl hover:bg-green-200 transform hover:scale-105 transition-transform duration-300">
      <img
        className="w-[250px] h-[150px] rounded-lg"
        alt="rest-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestCard;
