import React from "react";
import {
  Avatar,
  Text,
  HStack,
  VStack,
  Center,
  Box,
  IconButton,
} from "native-base";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const ui = useSelector((state) => state.ui);

  const [user, setUser] = React.useState(ui.activeUser);

  React.useEffect(() => {
    setUser(ui.activeUser);
  }, []);

  return (
    <ScrollView>
      <VStack>
        <ImageBackground
          source={require("../assets/backgroundImage.jpg")}
          style={{ width: "100%", height: 400 }}
        >
          <Box flex={1} justifyContent="center">
            <VStack>
              <Center>
                <Avatar
                  w={150}
                  h={150}
                  elevation={5}
                  source={{ uri: user.picture }}
                />
              </Center>
              <Center mt={2}>
                <Text color={"#F2F2F2"} bold={true} fontSize={30}>
                  {user.name}
                </Text>
              </Center>
              <Center>
                <Text color={"#F2F2F2"} fontSize={20} fontWeight="medium">
                  {user.location.country}
                </Text>
              </Center>
            </VStack>
          </Box>
        </ImageBackground>
        <Box mt={-4}>
          <Center>
            <HStack>
              <Center mx={4}>
                <Box
                  backgroundColor="orange.300"
                  w={50}
                  h={50}
                  borderRadius={25}
                >
                  <IconButton
                    alignSelf="center"
                    colorScheme="black"
                    size="lg"
                    _icon={{
                      as: Feather,

                      name: "twitter",
                    }}
                  />
                </Box>
              </Center>
              <Center mx={4}>
                <Box
                  backgroundColor="orange.300"
                  w={50}
                  h={50}
                  borderRadius={25}
                >
                  <IconButton
                    alignSelf="center"
                    colorScheme="black"
                    size="lg"
                    _icon={{
                      as: Feather,

                      name: "facebook",
                    }}
                  />
                </Box>
              </Center>
              <Center mx={4}>
                <Box
                  backgroundColor="orange.300"
                  w={50}
                  h={50}
                  borderRadius={25}
                >
                  <IconButton
                    alignSelf="center"
                    colorScheme="black"
                    size="lg"
                    _icon={{
                      as: Feather,

                      name: "instagram",
                    }}
                  />
                </Box>
              </Center>
            </HStack>
          </Center>
        </Box>
        <Text mx={4} fontSize={20} bold={true}>
          About
        </Text>
        <Box
          alignSelf="center"
          backgroundColor={"amber.200"}
          w={"90%"}
          my={2}
          borderRadius={10}
          elevation={5}
          p={2}
        >
          <VStack>
            <Center>
              <Text fontSize={15} textAlign="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisi vel consectetur interdum, nisl nisi aliquam nisi,
                euismod euismod nisi nisi euismod nisi. Donec euismod, nisi vel
                consectetur interdum, nisl nisi
              </Text>
            </Center>
          </VStack>
        </Box>

        <Text mx={4} my={2} fontSize={18} bold={true}>
          Contact
        </Text>
        <Box
          alignSelf="center"
          backgroundColor={"blue.200"}
          w={"90%"}
          my={2}
          borderRadius={10}
          elevation={5}
          p={2}
        >
          <VStack>
            <VStack alignContent="flex-start">
              <HStack w="100%" my={2}>
                <Center mr={2}>
                  <MaterialIcons name="email" size={30} color="gray.500" />
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    E-mail:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.email}
                  </Text>
                </Center>
              </HStack>
              <HStack w="100%">
                <Center mr={2}>
                  <MaterialIcons name="phone" size={30} color="gray.500" />
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    Phone:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.phone}
                  </Text>
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </Box>
        <Text mx={4} my={2} fontSize={18} bold={true}>
          Address
        </Text>
        <Box
          alignSelf="center"
          backgroundColor={"emerald.300"}
          w={"90%"}
          my={2}
          borderRadius={10}
          elevation={5}
          p={2}
        >
          <VStack>
            <VStack alignContent="flex-start">
              <HStack w="100%" mt={2} mb={2}>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    Street:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.location?.street?.number +
                      ", " +
                      user?.location?.street?.name}
                  </Text>
                </Center>
              </HStack>
              <HStack w="100%" mb={2}>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    City:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.location?.city}
                  </Text>
                </Center>
              </HStack>
              <HStack w="100%" mb={2}>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    State:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.location?.state}
                  </Text>
                </Center>
              </HStack>
              <HStack w="100%" mb={2}>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    Country:{" "}
                  </Text>
                </Center>
                <Center>
                  <Text fontWeight={500} fontSize={16}>
                    {user?.location?.country}
                  </Text>
                </Center>
              </HStack>
            </VStack>
          </VStack>
        </Box>
      </VStack>
    </ScrollView>
  );
};
export default UserDetails;
