import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import {
  Box,
  Button,
  Icon,
  Center,
  HStack,
  IconButton,
  Text,
} from "native-base";
import { useSelector, useDispatch } from "react-redux";
import UserCard from "../components/UserCard";
import { AntDesign } from "@expo/vector-icons";
import { UIActions } from "../store/ui";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const UserList = () => {
  const user = useSelector((state) => state.user.user);
  const userList = user;
  const ui = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const [userLists, setUserLists] = React.useState(userList);
  useEffect(() => {
    setUserLists(userList);
  }, [userList]);
  const handleMaleFilter = () => {
    const wholeList = userList;
    const filteredList = wholeList.filter((individualUser) => {
      if (individualUser.gender === "male") {
        return individualUser;
      }
    });

    setUserLists(filteredList);
  };
  const handleFemaleFilter = () => {
    const wholeList = userList;
    const filteredList = wholeList.filter((individualUser) => {
      if (individualUser.gender === "female") {
        return individualUser;
      }
    });

    setUserLists(filteredList);
  };
  const handleClear = () => {
    const wholeList = userList;
    setUserLists(wholeList);
  };

  return (
    <Box flex={1} justifyContent="center">
      <HStack my={2} mx={4}>
        <Center>
          <Text fontWeight={"bold"} fontSize={16}>
            Filter:
          </Text>
        </Center>
        <Center>
          <Button
            borderRadius={16}
            mx={2}
            onPress={() => {
              handleFemaleFilter();
            }}
            leftIcon={<Icon as={Ionicons} name="female" size="md" />}
          >
            Female
          </Button>
        </Center>
        <Center>
          <Button
            borderRadius={16}
            mx={2}
            onPress={() => {
              handleMaleFilter();
            }}
            leftIcon={<Icon as={Ionicons} name="male" size="md" />}
          >
            Male
          </Button>
        </Center>
        <Center>
          <Button
            borderRadius={16}
            mx={2}
            onPress={() => {
              handleClear();
            }}
            leftIcon={<Icon as={MaterialIcons} name="clear" size="md" />}
          >
            Clear
          </Button>
        </Center>
      </HStack>
      <ScrollView>
        {userLists.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
        <HStack justifyContent="space-between" mx={4}>
          <Center>
            <IconButton
              colorScheme={!(ui.pagination > 1) ? "gray" : "black"}
              size="lg"
              disabled={!(ui.pagination > 1)}
              onPress={() => {
                dispatch(UIActions.decreasePagination());
              }}
              variant={"ghost"}
              _icon={{
                as: AntDesign,
                name: "caretleft",
              }}
            />
          </Center>
          <Center>
            <Text bold={true}>Current Page: {ui.pagination}</Text>
          </Center>
          <Center>
            <IconButton
              colorScheme={"black"}
              size="lg"
              onPress={() => {
                dispatch(UIActions.increasePagination());
              }}
              variant={"ghost"}
              _icon={{
                as: AntDesign,
                name: "caretright",
              }}
            />
          </Center>
        </HStack>
      </ScrollView>
      <Box></Box>
    </Box>
  );
};
export default UserList;
