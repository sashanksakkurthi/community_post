import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import { Progress, Stack } from "@chakra-ui/react";
import PostInput from "../components/PostInput";
import PostCard from "../components/PostCard";
import { useState } from "react";
const Home: NextPage = () => {
  const [logging, setLogging] = useState(false);
  setTimeout(() => {
    setLogging(true);
  }, 500);
  return (
    <>
      {logging ? (
        <>
          <Navbar />
          <Stack gap={2}>
            <PostInput />
            <PostCard />
          </Stack>
        </>
      ) : (
        <Progress size="xs" isIndeterminate />
      )}
    </>
  );
};

export default Home;
