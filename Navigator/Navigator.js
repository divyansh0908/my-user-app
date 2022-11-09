import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserList from "../Screens/UserList";
import FavouriteUsers from "../Screens/FavouriteUser";
import UserDetails from "../Screens/UserDetails";

const UserStack = createNativeStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen
        name="Home"
        component={UserList}
        options={{
          headerStyle: {
            backgroundColor: "#C8545D",
          },
        }}
      />
      <UserStack.Screen
        name="Details"
        component={UserDetails}
        options={{
          headerStyle: {
            backgroundColor: "#C8545D",
          },
        }}
      />
    </UserStack.Navigator>
  );
}

const FavouriteStack = createNativeStackNavigator();

function FavouriteStackScreen() {
  return (
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen
        name="Favourite Screen"
        component={FavouriteUsers}
        options={{
          headerStyle: {
            backgroundColor: "#C8545D",
          },
        }}
      />
      <FavouriteStack.Screen
        name="Details"
        component={UserDetails}
        options={{
          headerStyle: {
            backgroundColor: "#C8545D",
          },
        }}
      />
    </FavouriteStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerTintColor: "black",

          headerShown: false,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "User") {
              iconName = focused ? "user" : "user-o";
            } else if (route.name === "Favourite") {
              iconName = focused ? "heart" : "heart-o";
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="User" component={UserStackScreen} />
        <Tab.Screen name="Favourite" component={FavouriteStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const BottomNavigator = () => {
//   return (
// <Tab.Navigator
//   screenOptions={({ route }) => ({
//     headerTintColor: "black",
//     headerStyle: {
//       backgroundColor: "#C8545D",
//     },

//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (route.name === "UserList") {
//         iconName = focused ? "user" : "user-o";
//       } else if (route.name === "FavouriteUsers") {
//         iconName = focused ? "heart" : "heart-o";
//       }

//       // You can return any component that you like here!
//       return <FontAwesome name={iconName} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: "tomato",
//     tabBarInactiveTintColor: "gray",
// })}
// >
//         <Tab.Screen name="UserList" component={UserListNavigator} />
//         <Tab.Screen name="FavouriteUsers" component={FavouriteNavigator} />
//       </Tab.Navigator>

//   );
// };
