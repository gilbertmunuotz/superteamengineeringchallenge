import { SERVER_URI } from "@/constants/constants";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Transaction } from "@/interfaces/interface";

// Create an API service for jobs
export const transactionsAPI = createApi({
    reducerPath: 'transactionsAPI',
    tagTypes: ['Transactions'],
    baseQuery: fetchBaseQuery({
        baseUrl: `${SERVER_URI}`,
    }),
    endpoints: (builder) => ({
        getTransaction: builder.query<Transaction[], void>({
            query: () => ({
                url: '/transactions',
                method: 'GET',
            }),
            providesTags: ['Transactions']
        }),
        postTransactions: builder.mutation<void, Transaction>({
            query: (newTransaction) => ({
                url: '/transactions',
                method: 'POST',
                body: newTransaction
            }),
            invalidatesTags: ['Transactions']
        }),
    })
});

// Export hooks for components to use
export const { useGetTransactionQuery, usePostTransactionsMutation } = transactionsAPI;