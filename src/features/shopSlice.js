import { createSlice } from "@reduxjs/toolkit"
import categoriesData from "../data/categories_data.json"
import booksData from "../data/books_data.json"


export const shopSlice = createSlice({
    name: "shop",
    initialState: {
        categorySelected: "",
        bookIdSelected: 0,
        categories: categoriesData,
        books: booksData,
        booksFilterByCategory: [],
        bookSelected: {}

    },
    reducers: {
        setCategorySelected: (state, action) => {
            state.categorySelected = action.payload
            state.booksFilterByCategory = state.books.filter(book => book.category === state.categorySelected)
        },

        setBookIdSelected: (state, action) => {
            state.bookIdSelected = action.payload
        },
        setBookSelected: (state, action) => {
            state.bookSelected = state.books.find(book => book.id === state.bookIdSelected)
        },
    }


});


export const { setCategorySelected, setBookIdSelected, setBookSelected } = shopSlice.actions

export default shopSlice.reducer
