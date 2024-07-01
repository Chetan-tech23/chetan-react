import { useEffect, useState } from "react";
import { RES_MENU } from "../constants";

const useRestMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuInfo();
  }, []);

  const fetchMenuInfo = async () => {
    const menuItems = await fetch(RES_MENU + resId);
    const json = await menuItems.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestMenu;
