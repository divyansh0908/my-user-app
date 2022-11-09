import { createSlice } from "@reduxjs/toolkit";

 const userSlice = createSlice({
    name: "user",
    initialState: {
        user: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setFavourite: (state, action) => {
            state.user.map((user) => {
              if (user.email === action.payload.email) {
                user.favourite = !user.favourite;
              }
            });
            
        }

    }
}
 );

export const userActions = userSlice.actions;
export default userSlice.reducer;

