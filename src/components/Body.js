import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  //console.log("abab",listOfRestaurants)

  const PromotedLabel = withPromotedLabel(RestaurantCard)

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    const restaurantData = await (
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        .restaurants);
    setListOfRestaurants(restaurantData);
    setFilteredRestaurant(restaurantData);
  };
  // conditional rendering or using ternary opratory

    
  const isOnline = useOnlineStatus();

  if (isOnline === false)
    return <h1>Internet Is not working. Please check your connections</h1>;




  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-sec">
      <div className="searchSec flex items-center	">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
          className="px-4 py-2 bg-green-100 mx-4 rounded-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        
      <div className=" mx-4">
      <button
        className="px-4 py-2 bg-green-100 rounded-md"
          type="button"
          onClick={() => {
            const filterList = listOfRestaurants.filter(res => res.info.avgRating > 4);
            setListOfRestaurants(filterList)
          }}
        >
          Top Rated restaurant
        </button>
      </div>
        
      </div>
      <div className="flex flex-wrap	">
        {filteredRestaurant.map((restaurant) => (
         <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}>
          {
            restaurant.info.promoted ? (<PromotedLabel resData={restaurant?.info}/>) :  <RestaurantCard  resData={restaurant?.info} />
          }
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
