import {
  Avatar,
  Box,
  Divider,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PostActions from "./PostActions";

const PostCard = () => {
  return (
    <Flex justify={"center"} bg={"gray.800"}>
      <Box
        w={{ base: "96", sm: "xl", lg: "2xl" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        mx={2}
      >
        <Flex h={"14"} align={"center"} p={2}>
          <HStack>
            <Avatar size={"sm"} />
            <Box>
              <Text>sakkurthi sashank</Text>
              <Text fontSize={"x-small"} fontWeight={"light"}>
                createdAt 15/04/2004
              </Text>
            </Box>
          </HStack>
        </Flex>
        <Divider />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            noOfLines={1}
          >
            Hyderabad to Guntur
          </Box>
        </Box>
        <Divider />
        <PostActions />
      </Box>
    </Flex>
  );
};

export default PostCard;
