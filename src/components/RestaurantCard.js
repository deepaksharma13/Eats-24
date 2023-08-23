import {CDN_URL} from '../utils/constant';


const RestaurantCard = ({resData}) => {

    const {name,cuisines,sla,cloudinaryImageId,costForTwo,avgRating} = resData;
  
    return (
      <div className="Card m-4 p-4 w-[250px] shadow-md h-auto rounded-sm" style={{background:"#f0f0f0"}}>
        <img src={CDN_URL + cloudinaryImageId}   alt="imgCard" className='rounded-lg' />
        <h2 className='font-bold py-2 text-lg'>{name}</h2>
        <p>{cuisines.join(' , ')}</p>
        <p>{sla?.deliveryTime}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    );
  };

  export default RestaurantCard

  export const withPromotedLabel = (RestaurantCard) =>{
    return ({props})=> {
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
  }