import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        user: "UserLogged",
        updatedAt: Date.now().toLocaleString(),
        total: 0,
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            const isBookInCart = state.items.find(item => item.id === action.payload.id)
            if (!isBookInCart) {

                state.items.push(action.payload)
                const total = state.items.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            } else {
                const itemsUpdated = state.items.map(item => {
                    if (item.id === action.payload.id) {
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (acc, current) => acc += current.price * current.quantity, 0
                )
                state.total = total
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    updatedAt: Date.now().toLocaleString()
                }
            }

        },
        removeItem: (state, action) => {
            console.log(action.payload)
            state.items = state.items.filter(item => item.id !== action.payload);
            state.total = state.items.reduce((acc, current) => acc += current.price * current.quantity, 0);
            state.updatedAt = Date.now().toLocaleString();
        },
        clearCart: (state, action) => {
            state.items = [],
                state.total = 0
        }
    }
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer