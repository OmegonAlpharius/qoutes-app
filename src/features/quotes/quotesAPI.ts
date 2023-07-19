import { Quote } from "@/interfaces/TypesQuote";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesAPI = createApi({
  reducerPath: "quotesApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://ajs-13-burger-builder-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getAllQuotes: builder.query<Quote[], void>({
      query: () => "quotes.json",
      transformResponse(response) {
        return Object.entries(response as Record<string, Quote>).map(
          ([id, quote]) => ({ ...quote, id })
        );
      },
    }),
    getQuotesByCategory: builder.query<Quote[], string | undefined>({
      query: (category) => {
        const query = category
          ? `?orderBy="category"&equalTo="${category}" `
          : "";
        return `quotes.json${query}`;
      },
      transformResponse: (response) => {
        return Object.entries(response as Record<string, Quote>).map(
          ([id, quote]) => ({ ...quote, id })
        );
      },
    }),
  }),
});

export const { useGetAllQuotesQuery, useGetQuotesByCategoryQuery } = quotesAPI;
