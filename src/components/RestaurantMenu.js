import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();  // call useParams and get value of restaurant id using object destructuring

  const  resInfo  = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, locality, cuisines, costForTwo } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{locality}</p>
      <p>
        {cuisines.join(",")} : {costForTwo / 100}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.id}>
            {item.card.info.name} :{" Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
