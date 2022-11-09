import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./user";
import uiSlice from "./ui";

const store = configureStore({
  reducer: { user: userSlice, ui: uiSlice },
});
export default store;