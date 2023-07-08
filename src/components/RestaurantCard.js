import {CDN_URL} from '../utils/constant'


const RestaurantCard = ({resData}) => {

    const {name,cuisines,slaString,costForTwo,avgRating} = resData.data;
  
    return (
      <div className="Card">
        <img src={CDN_URL + resData.data.cloudinaryImageId}   alt="imgCard"/>
        <h2>{name}</h2>
        <p>{cuisines.join(',')}</p>
        <p>{slaString}</p>
        <p>{avgRating}</p>
        <p>₹{costForTwo/100} FOR TWO</p>
      </div>
    );
  };

  export default RestaurantCard