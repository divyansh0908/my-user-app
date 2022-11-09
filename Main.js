import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserData } from "./store/userActions";
import Navigator from "./Navigator/Navigator";
const Main = () => {
  const dispatch = useDispatch();
  const uiData = useSelector((state) => state.ui);

  const pagination = uiData.pagination;
  useEffect(() => {
    dispatch(fetchUserData(pagination));
  }, [pagination]);
  
  return <Navigator />;
};
export default Main;
