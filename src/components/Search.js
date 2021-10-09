import React from "react";
import { Input, Flex } from "@chakra-ui/react";
const Search = ({ setSearch }) => {
  return (
    <Flex position="sticky" top="0" p="4" zIndex="50" bg="white">
      <Input
        variant="filled"
        width="full"
        name="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search Coin"
      />
    </Flex>
  );
};

export default Search;
