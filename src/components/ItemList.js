import { CDN_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="text-left p-2 m-2 border-b-2 border-b-slate-600"
        >
          <div className="flex justify-between py-2">
            <div className="w-9/12 pr-2">
              <div className="flex flex-col ">
                <span>{item.card.info.name}</span>
                <span>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 relative">
             <div><img src={CDN_URL + item.card.info.imageId} /></div> 
              <button className="p-2 bg-black text-white shadow-lg absolute m-auto -bottom-2 left-14 rounded-md">Add +</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
