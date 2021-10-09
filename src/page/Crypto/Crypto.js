import React from "react";
import { useParams } from "react-router-dom";
import { useGetCoinQuery } from "../../app/services/cryptoApi";
import { useToast } from "@chakra-ui/toast";
import {
  Spinner,
  Container,
  HStack,
  VStack,
  Text,
  Heading,
  Badge,
  Image,
  Divider,
} from "@chakra-ui/react";
const Crypto = () => {
  const { id } = useParams();
  const toast = useToast();

  const { data, isLoading, error } = useGetCoinQuery(id);
  if (error) {
    toast({
      title: "Error",
      description: error.data.message,
      status: "error",
    });
  }
  let {
    name,
    rank,
    change,
    symbol,
    iconUrl,
    color,
    price,
    marketCap,
    description,
  } = !isLoading && data?.data?.coin;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Container maxW="1300px">
            <HStack justify="space-between" width="100%" p="4">
              <HStack>
                <Text fontSize="xs">{rank}</Text>
                <Image src={iconUrl} h="50" w="50" />
                <Heading fontSize="2xl">{name}</Heading>
                <Badge colorScheme={change < 0 ? "red" : "green"}>
                  {symbol}
                </Badge>
              </HStack>
              <Text fontSize="3xl" fontWeight="bold">
                Rank - {rank}
              </Text>
            </HStack>
            <Text
              dangerouslySetInnerHTML={{ __html: description }}
              fontSize="sm"
              p="4"
            />

            <VStack align="flex-start" p="4">
              <Heading fontSize="2xl">More Information</Heading>
              <Divider bg={color} />
              <Text>Price : {Math.round(price * 100) / 100} $</Text>
              <Text>
                Market Cap : {Math.round((marketCap / 1000000000) * 100) / 100}{" "}
                B
              </Text>
              <Text>
                Daily Change :{" "}
                <Badge colorScheme={change < 0 ? "red" : "green"}>
                  {change}%
                </Badge>
              </Text>
            </VStack>
          </Container>
        </>
      )}
    </>
  );
};

export default Crypto;
