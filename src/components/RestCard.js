import { CDN_LINK } from "../utils/constants";

const RestCard = (restObj) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, costForTwo } =
    restObj?.restObj?.info;
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="rest-logo"
        src={CDN_LINK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestCard;
