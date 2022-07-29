import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Flex, Stack } from "@chakra-ui/react";
import PostInput from "../components/PostInput";
import PostCard from "../components/PostCard";
const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Stack gap={2}>
        <PostInput />
        <PostCard />
      </Stack>
    </>
  );
};

export default Home;
