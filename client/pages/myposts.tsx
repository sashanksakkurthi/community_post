import { Stack, Progress } from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import PostInput from "../components/PostInput";

const MyPosts = () => {
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

export default MyPosts;
