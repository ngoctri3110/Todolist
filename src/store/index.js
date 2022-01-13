import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todoSlice";

//Store
const stote = configureStore({
  reducer: {
    todosReducer,
  },
});

//Export
export default stote;
