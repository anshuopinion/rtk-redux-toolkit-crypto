import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
    prepareHeaders: (header) => {
      header.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
      header.set("x-rapidapi-key", process.env.REACT_APP_API_KEY);
      return header;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query({
      query: () => `/coins`,
    }),
    getCoin: builder.query({
      query: (id) => `/coin/${id}`,
    }),
  }),
});
export const { useGetCoinsQuery, useGetCoinQuery } = cryptoApi;
