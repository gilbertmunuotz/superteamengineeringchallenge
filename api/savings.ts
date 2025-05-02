import { SERVER_URI } from "@/constants/constants";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Saving } from "@/interfaces/interface";

// Create an API service for jobs
export const savingsAPI = createApi({
    reducerPath: 'savingsAPI',
    tagTypes: ['Savings'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URI}`,
    }),
    endpoints: (bulder) => ({
        getSavings: bulder.query<Saving[], void>({
            query: () => ({
                url: '/savings',
                method: 'GET',
            }),
            providesTags: ['Savings']
        })
    })
});

// Export hooks for components to use
export const { useGetSavingsQuery } = savingsAPI;