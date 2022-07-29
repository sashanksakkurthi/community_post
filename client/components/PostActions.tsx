import { ArrowUpIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";

const PostActions = () => {
  return (
    <Flex h={"10"} pl={4} gap={4} align={"center"}>
      <Button bg={""} py={4} gap={2} size={"xs"}>
        <AiOutlineHeart size={"22"} fill={"#CBD5E0"} />
        <Text fontSize={"md"}>0</Text>
      </Button>
      <Comment />
    </Flex>
  );
};

const Comment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg={""} py={4} gap={2} size={"xs"}>
        <AiOutlineComment size={"22"} fill={"#CBD5E0"} />
        <Text fontSize={"md"}>0</Text>
      </Button>
      <Modal onClose={onClose} size={"lg"} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Comments</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack>
              <HStack>
                <Input
                  placeholder="Create New Comment"
                  size="md"
                  variant={"filled"}
                />
                <IconButton
                  aria-label={""}
                  size={"sm"}
                  icon={<ArrowUpIcon />}
                />
              </HStack>
              <Flex justify={"center"}>
                <Box
                  w={{ base: "96", sm: "md", lg: "xl" }}
                  mx={2}
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Flex h={"10"} align={"center"} p={2} justify={"space-between"}>
                    <HStack>
                      <Avatar size={"xs"} />
                      <Box>
                        <Text fontSize={"xs"}>sakkurthi sashank</Text>
                        <Text fontSize={"xx-small"} fontWeight={"light"}>
                          createdAt 15/04/2004
                        </Text>
                      </Box>
                    </HStack>
                    <Flex gap={2}>
                      <IconButton
                        size={"xs"}
                        aria-label={""}
                        icon={<EditIcon />}
                      />
                      <IconButton
                        size={"xs"}
                        aria-label={""}
                        icon={<DeleteIcon />}
                      />
                    </Flex>
                  </Flex>
                  <Divider />
                  <Box p={"2"}>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      fontSize={"sm"}
                    >
                      Hyderabad to Guntur
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PostActions;
