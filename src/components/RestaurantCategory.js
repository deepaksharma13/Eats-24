import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data ,showItems,setShowIndex}) => {

  const handleShow = ()=> {
    setShowIndex()
  }

  return (
    <div className="w-6/12 m-auto bg-gray-100 shadow-lg p-4 my-6 ">
      <div className="flex justify-between cursor-pointer" onClick={handleShow}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇</span>
      </div>
      {showItems && <ItemList items={data.itemCards}/>}
    </div>
  );
};

export default RestaurantCategory;
