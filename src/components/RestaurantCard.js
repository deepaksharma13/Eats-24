import {CDN_URL} from '../utils/constant';


const RestaurantCard = ({resData}) => {

    const {name,cuisines,sla,cloudinaryImageId,costForTwo,avgRating} = resData;
  
    return (
      <div className="Card">
        <img src={CDN_URL + cloudinaryImageId}   alt="imgCard"/>
        <h2>{name}</h2>
        <p>{cuisines.join(' , ')}</p>
        <p>{sla?.deliveryTime}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    );
  };

  export default RestaurantCard