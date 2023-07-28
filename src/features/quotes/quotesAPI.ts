import { NewQuote, Quote } from "@/interfaces/TypesQuote";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const quotesAPI = createApi({
  reducerPath: "quotesApi",
  tagTypes: ["Quotes"],
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
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Quotes" as const, id })),
              ...result.map(({ category }) => ({
                type: "Quotes" as const,
                id: category,
              })),
              { type: "Quotes", id: "LIST" },
            ]
          : [{ type: "Quotes", id: "LIST" }],
    }),

    getQuoteById: builder.query<Quote, string>({
      query: (id) => `quotes/${id}.json`,
      providesTags: (result) =>
        result
          ? [
              { type: "Quotes" as const, id: result.id },
              { type: "Quotes", id: result.category },
            ]
          : [{ type: "Quotes", id: "LIST" }],
    }),

    addQuote: builder.mutation<Record<"name", string>, NewQuote>({
      query: (quote) => ({ url: "quotes.json", method: "POST", body: quote }),
      invalidatesTags: (result, error, arg) => [
        { type: "Quotes", id: arg.category },
      ],
    }),

    updateQuote: builder.mutation<void, Quote>({
      query: ({ id, ...quote }) => ({
        url: `quotes/${id}.json`,
        method: "PUT",
        body: quote,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Quotes", id: arg.id },
        { type: "Quotes", id: arg.category },
      ],
    }),
    deleteQuote: builder.mutation<void, Quote>({
      query: ({ id }) => ({
        url: `quotes/${id}.json`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "Quotes", id: arg.id },
        { type: "Quotes", id: arg.category },
      ],
    }),
  }),
});

export const {
  useGetAllQuotesQuery,
  useGetQuotesByCategoryQuery,
  useGetQuoteByIdQuery,
  useAddQuoteMutation,
  useUpdateQuoteMutation,
  useDeleteQuoteMutation,
} = quotesAPI;
