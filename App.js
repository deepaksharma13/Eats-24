import React, { Component } from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="headerMain">
      <div className="LogoOuter">
        <img
          src="https://www.nicepng.com/png/detail/104-1041412_eat-24-logo-yelp-eat-24-logo-transparent.png"
          alt="logo"
        />
      </div>
      <div className="list-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resData}) => {

  const {name,cuisines,slaString,costForTwo} = resData.data;

  return (
    <div className="Card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId}   alt="imgCard"/>
      <h2>{name}</h2>
      <p>{cuisines.join(',')}</p>
      <p>{slaString}</p>
      <p>₹{costForTwo/100} FOR TWO</p>
    </div>
  );
};

const restObj = {
  "type": "seeAllRestaurants",
      "data": {
            "type": "F",
            "id": "712883",
            "name": "Pizza Pasta Wala",
            "uuid": "cae43d3e-0437-48de-8ffa-def3a5ed3937",
            "city": "81",
            "area": "Sector 15_FBD",
            "totalRatingsString": "Too Few Ratings",
            "cloudinaryImageId": "4371ea20a925a4be398232931ff0e320",
            "cuisines": [
              "Pizzas",
              "Pastas",
              "Burgers",
              "Fast Food",
              "Chinese",
              "Cafe",
              "Beverages"
            ],
            "tags": [
              
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 42,
            "minDeliveryTime": 42,
            "maxDeliveryTime": 42,
            "slaString": "42 MINS",
            "lastMileTravel": 3,
            "slugs": {
              "restaurant": "pizza-pasta-wala-sector-15_fbd-sector-15_fbd",
              "city": "faridabad"
            },
            "cityState": "81",
            "address": "FCA 499 A, CHAWLA COLONY  BALLABGARH KALI MANDIR, Fatehpur  Biloch(58), Ballabgarh, Faridabad,  Haryana - 121004",
            "locality": "Chawla Colony",
            "parentId": 425630,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [
              
            ],
            "ribbon": [
              {
                "type": "PROMOTED"
              }
            ],
            "chain": [
              
            ],
            "feeDetails": {
              "fees": [
                {
                  "name": "distance",
                  "fee": 4200,
                  "message": ""
                },
                {
                  "name": "time",
                  "fee": 0,
                  "message": ""
                },
                {
                  "name": "special",
                  "fee": 0,
                  "message": ""
                }
              ],
              "totalFees": 4200,
              "message": "",
              "title": "Delivery Charge",
              "amount": "4200",
              "icon": ""
            },
            "availability": {
              "opened": true,
              "nextOpenMessage": "",
              "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=7067501~p=1~eid=00000189-0fb1-1f65-22b5-31bd00e20143~srvts=1688185413477",
            "badges": {
              "imageBased": [
                
              ],
              "textBased": [
                
              ],
              "textExtendedBadges": [
                
              ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
              "restaurantId": "712883",
              "deliveryTime": 42,
              "minDeliveryTime": 42,
              "maxDeliveryTime": 42,
              "lastMileTravel": 3,
              "lastMileDistance": 0,
              "serviceability": "SERVICEABLE",
              "rainMode": "NONE",
              "longDistance": "NOT_LONG_DISTANCE",
              "preferentialService": false,
              "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "--",
            "totalRatings": 0,
            "new": true
          }
}


const Body = () => {
  return (
    <div className="body-sec">
      <div className="searchSec">
        <input type="text" placeholder="Search" />
      </div>
      <div className="Card-container">
        <RestaurantCard resData={restObj} />
      </div>
    </div>
  );
};



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
