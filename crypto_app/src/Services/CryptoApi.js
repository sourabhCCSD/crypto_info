import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "36d8261b23msh3e7c3b0500255fcp146863jsn4782b2d60612",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
  getCryptos: builder.query({ //making a query here.
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getExchanges: builder.query({ //making a query here.
      query: () => createRequest(`/exchanges`),
    }),
  getCryptoDetails : builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
  getCryptoHistory : builder.query({
    query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
  })
  }),
});
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
//you call that query with useWhateverTheNameQuery hook.