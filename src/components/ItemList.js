import { CDN_LINK } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-bold text-gray-600">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm text-gray-600">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            {item.card.info.imageId && (
              <img
                src={CDN_LINK + item.card.info.imageId}
                className="w-full h-24 rounded-md"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
