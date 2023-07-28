import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // Optional Chaining
    const restaurantData = await (json?.data?.cards[2]?.card?.card?.gridElements
      ?.infoWithStyle.restaurants ||
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants ||
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        .restaurants);
    setListOfRestaurants(restaurantData);
    setFilteredRestaurant(restaurantData);
  };
  // conditional rendering or using ternary opratory
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-sec">
      <div className="searchSec">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
        <div>
        <button
          type="button"
          onClick={() => {
            const filterList = listOfRestaurants.filter(res => res.info.avgRating > 4);
            setListOfRestaurants(filterList)
            console.log(listOfRestaurants)
          }}
        >
          Top Rated restaurant
        </button>
        </div>
      </div>
      <div className="Card-container">
        {filteredRestaurant.map((restaurant) => (
         <Link to={"/restaurants/" + restaurant?.info?.id} key={restaurant?.info?.id}><RestaurantCard  resData={restaurant?.info} /></Link> 
        ))}
      </div>
    </div>
  );
};

export default Body;
