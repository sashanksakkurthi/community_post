import React from "react";
import { Button, Flex, HStack, IconButton, Input } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
const PostInput = () => {
  return (
    <>
      <Flex justify={"center"} pt={"2"}>
        <HStack>
          <Input
            w={{ base: "72", sm: "md", lg: "xl" }}
            placeholder="Create New Post"
            size="md"
            variant={"filled"}
          />
          <IconButton aria-label={""} size={"sm"} icon={<ArrowUpIcon />} />
        </HStack>
      </Flex>
    </>
  );
};

export default PostInput;
