import RestaurantCard from "./RestaurantCard";
import restObj from "../utils/mockdata";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(restObj)

    // let listOfRestaurantsjs = [{
    //   data: {
    //     type: "F",
    //     id: "7",
    //     name: "Pizza Pasta Wala",
    //     avgRating: '3.8',
    //     uuid: "cae43d3e-0437-48de-8ffa-def3a5ed3937",
    //     city: "81",
    //     area: "Sector 15_FBD",
    //     totalRatingsString: "Too Few Ratings",
    //     cloudinaryImageId: "4371ea20a925a4be398232931ff0e320",
    //     cuisines: [
    //       "Pizzas",
    //       "Pastas",
    //       "Burgers",
    //       "Fast Food",
    //       "Chinese",
    //       "Cafe",
    //       "Beverages",
    //     ],
        
    //   },
    // },
    // {
    //   data: {
    //     type: "F",
    //     id: "71",
    //     name: "Pizza Wala",
    //     avgRating: '4.8',
    //     uuid: "cae43d3e-0437-48de-8ffa-def3a5ed3937",
    //     city: "81",
    //     area: "Sector 15_FBD",
    //     totalRatingsString: "Too Few Ratings",
    //     cloudinaryImageId: "4371ea20a925a4be398232931ff0e320",
    //     cuisines: [
    //       "Pizzas",
    //       "Pastas",
    //       "Burgers",
    //       "Fast Food",
    //       "Chinese",
    //       "Cafe",
    //       "Beverages",
    //     ]
    //   },
    // },
    // {
    //   data: {
    //     type: "F",
    //     id: "711",
    //     name: "Pizza H",
    //     avgRating: '4.1',
    //     uuid: "cae43d3e-0437-48de-8ffa-def3a5ed3937",
    //     city: "81",
    //     area: "Sector 15_FBD",
    //     totalRatingsString: "Too Few Ratings",
    //     cloudinaryImageId: "4371ea20a925a4be398232931ff0e320",
    //     cuisines: [
    //       "Pizzas",
    //       "Pastas",
    //       "Burgers",
    //       "Fast Food",
    //       "Chinese",
    //       "Cafe",
    //       "Beverages",
    //     ]
    //   },
    // }]


  return (
    <div className="body-sec">
      <div className="searchSec">
        <button
          type="button"
          onClick={() => {
            const filterList = listOfRestaurants.filter(res => res.data.avgRating > 4);
            setListOfRestaurants(filterList)
            console.log(listOfRestaurants)
          }}
        >
          Top Rated restaurant{" "}
        </button>
      </div>
      <div className="Card-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
