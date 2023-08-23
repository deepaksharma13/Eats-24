import { useEffect, useState } from "react";
import { Menu_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    async function fetchMenu(){
    const data = await fetch(Menu_API + resId);

    const json =  await data.json();
    setResInfo(json.data);
    }
    fetchMenu()
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
