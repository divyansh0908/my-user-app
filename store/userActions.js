import { userActions } from "./user";
export const fetchUserData = (pageNumber) => {
   
  return async (dispatch) => {
    const fetchData = async (pageNumber) => {
      const response = await fetch(
        `https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc`
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData(pageNumber);
      const Arr=cartData.results.map((user) => {
        const toReturn = {}
        toReturn.favourite = false;
        toReturn.name = user?.name?.first + " " + user?.name?.last;
        toReturn.gender = user?.gender;
        toReturn.email = user?.email;
        toReturn.picture = user?.picture?.medium;
        toReturn.location = user?.location;
        toReturn.phone = user?.phone;
        return toReturn;
      })
      dispatch(userActions.setUser(Arr));
      

    } catch (error) {
      console.log(error);
    }
  };
};

