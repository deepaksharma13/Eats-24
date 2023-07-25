import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("")

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3222028&lng=77.3410569&page_type=DESKTOP_WEB_LISTING")
         const json = await data.json();
         //console.log(json)
         setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
         setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)   
  }

  // conditional rendering or using ternary opratory
  return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body-sec">
      <div className="searchSec">
      <div className="search">
        <input type="text" className="search-box" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />
        <button onClick={()=>{
          const filteredRestaurant = listOfRestaurants.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredRestaurant(filteredRestaurant)
        }}>Search</button>
       </div>
       <div>
        <button
          type="button"
          onClick={() => {
            const filterList = listOfRestaurants.filter(res => res.data.avgRating > 4);
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
         <Link to={"/restaurants/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard  resData={restaurant} /></Link> 
        ))}
      </div>
    </div>
  )
};

export default Body;
