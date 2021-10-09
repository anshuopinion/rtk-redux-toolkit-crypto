import React from "react";
import { Spinner, Grid, GridItem } from "@chakra-ui/react";
import { useGetCoinsQuery } from "../../app/services/cryptoApi";
import CryptoCard from "../../components/CryptoCard";
import Search from "../../components/Search";
import { useToast } from "@chakra-ui/toast";
const Home = () => {
  const toast = useToast();
  const [search, setSearch] = React.useState("");
  const { data, isLoading, error } = useGetCoinsQuery();
  console.log(search);

  if (error) {
    toast({
      title: "Error",
      description: error.data.message,
      status: "error",
    });
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Search setSearch={setSearch} />
          {
            <Grid
              p={4}
              gap="4"
              gridTemplateColumns={`repeat(auto-fit,minmax(200px,1fr))`}
            >
              {data &&
                data.data.coins
                  .filter((coin) => coin.name.toLowerCase().includes(search))
                  .map((coin) => (
                    <GridItem key={coin.uuid}>
                      <CryptoCard coin={coin} />
                    </GridItem>
                  ))}
            </Grid>
          }
        </>
      )}
    </>
  );
};

export default Home;
