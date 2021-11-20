import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const peopleApi = createApi({
  reducerPath: 'peopleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://swapi.dev/api/',
  }),
  endpoints: builder => ({
    getAllPeople: builder.query({
      query: () => `/people/`,
    }),
  }),
});
export const { useGetAllPeopleQuery } = peopleApi;
