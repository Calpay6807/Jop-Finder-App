import { configureStore } from "@reduxjs/toolkit";
import jopsReducer from "./jopsSlice";

export default configureStore({
  reducer: jopsReducer,
});
