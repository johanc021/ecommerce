import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const base_url = process.env.EXPO_PUBLIC_BASE_URL

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    endpoints: (builder) => ({
        getGenders: builder.query({
            query: () => 'genders.json'
        }),
        getBooks: builder.query({
            query: () => 'books.json'
        }),
        getBooksByGenders: builder.query({
            query: (gender) => `books.json?orderBy="gender"&equalTo="${gender}"`
            /* query: (gender) => `books.json?orderBy="gender"&equalTo="${gender}"` */
        }),
        postOrder: builder.mutation({
            query: ({ ...order }) => ({
                url: `orders/${order.localId}.json`,
                method: 'POST',
                body: order
            })
        }),
        getOrders: builder.query({
            query: (localId) => `orders/${localId}.json`
        }),
        putProfilePicture: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profilePictures/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image
                }
            })
        }),
        getProfilePicture: builder.query({
            query: (localId) => `profilePictures/${localId}.json`
        }),
        getUserLocation: builder.query({
            query: (localId) => `locations/${localId}.json`
        }),
        putUserLocation: builder.mutation({
            query: ({ location, localId }) => ({
                url: `locations/${localId}.json`,
                method: 'PUT',
                body: {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    address: location.address,
                }
            })
        }),
    })
})

export const { useGetGendersQuery, useGetBooksQuery, useGetBooksByGendersQuery, usePostOrderMutation, useGetOrdersQuery, usePutProfilePictureMutation, useGetUserLocationQuery, useGetProfilePictureQuery, usePutUserLocationMutation } = shopApi

