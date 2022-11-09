import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Center,
  Avatar,
  IconButton,
  Icon,
} from "native-base";
import {
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user";
import { UIActions } from "../store/ui";
import { TouchableOpacity } from "react-native";
const UserCard = (props) => {
  const dispatch = useDispatch();
  const { user } = props;
  const navigation = useNavigation();
  const ui = useSelector((state) => state.ui);
  const colorArr = [
    "red",
    "green",
    "blue",
    "coolGray",
    "cyan",
    "danger",
    "emerald",
    "fuchsia",
    "info",
    "primary",
    "light",
    "lightBlue",
    "purple",
    "orange",
    "lime",
    "pink",
    "amber",
    "rose",
    "teal",
    "yellow",
  ];
  const randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];

  const handleFavourite = () => {
    dispatch(userActions.setFavourite(user));
  };
  const handleCardTap = () => {
    dispatch(UIActions.setActiveUser(user));
    navigation.navigate("Details");
  };

  return (
    <TouchableOpacity onPress={handleCardTap}>
      <Box
        borderRadius={12}
        borderWidth={0}
        borderColor="gray"
        backgroundColor={`${randomColor}.200`}
        alignSelf={"center"}
        width="90%"
        mx={4}
        my={2}
        elevation={5}
      >
        <VStack>
          <Box
            width="100%"
            borderTopRadius={12}
            backgroundColor={`${randomColor}.400`}
            height="50px"
          ></Box>
          <HStack mx={2}>
            <Center mt={-8} ml={2}>
              <Avatar
                bg=".800"
                alignSelf="center"
                size="xl"
                elevation={5}
                source={{
                  uri: user.picture,
                }}
              />
            </Center>
            <Center>
              <HStack width="100%">
                <Center width={"70%"} alignItems="flex-start">
                  <VStack mx={2}>
                    <Center>
                      <Text fontSize={18} bold={true}>
                        {user.name}
                      </Text>
                    </Center>

                    <HStack>
                      <Center>
                        <Entypo
                          name="location-pin"
                          size={20}
                          color="gray.500"
                        />
                      </Center>
                      <Text fontWeight={400}>{user.location.city}</Text>
                    </HStack>
                  </VStack>
                </Center>
                <Center width="15%">
                  <IconButton
                    colorScheme="red"
                    alignSelf="center"
                    size="lg"
                    onPress={handleFavourite}
                    variant={"ghost"}
                    _icon={{
                      as: MaterialCommunityIcons,

                      name: user.favourite
                        ? "cards-heart"
                        : "cards-heart-outline",
                    }}
                  />
                </Center>
              </HStack>
            </Center>
          </HStack>
          <VStack mx={8} mt={4}>
            <HStack>
              <Center mr={2}>
                <MaterialIcons name="email" size={20} color="gray.500" />
              </Center>
              <Text fontWeight={400}>{user.email}</Text>
            </HStack>
            <HStack my={2}>
              <Center mr={2}>
                <MaterialIcons name="call" size={20} color="gray.500" />
              </Center>
              <Text fontWeight={400}>{user.phone}</Text>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </TouchableOpacity>
  );
};
export default UserCard;
