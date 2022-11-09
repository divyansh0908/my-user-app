import { createSlice } from "@reduxjs/toolkit";

const UIslices = createSlice({
    name: "UI",
    initialState: {
        isError: false,
        errorMessage: "",
        pagination: 1,
        activeUser: null,
    },
    reducers: {
        
        increasePagination: (state) => {
            state.pagination += 1;
        },
        decreasePagination: (state) => {
            state.pagination -= 1;
        },
        setError: (state, action) => {
            state.isError = action.payload;
            state.errorMessage = action.payload.message;
        },
        setActiveUser: (state, action) => {
            state.activeUser = action.payload;
        }
    }
});
export const UIActions = UIslices.actions;
export default UIslices.reducer;