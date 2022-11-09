import React from "react";
import { ScrollView } from "react-native";
import { Box } from "native-base";
import { useSelector } from "react-redux";
import UserCard from "../components/UserCard";

const FavouriteUsers = () => {
  const userList = useSelector((state) => state.user.user);

  return (
    <Box flex={1} justifyContent="center">
      <ScrollView>
        {userList.map((user) => {
          if (user.favourite) {
            return <UserCard key={user.email} user={user} />;
          }
        })}
      </ScrollView>
    </Box>
  );
};
export default FavouriteUsers;
