import { configureStore } from "@reduxjs/toolkit"
import MenuSlice from "./MenuSlice";
import CacheSlice from "./CacheSlice";
const store = configureStore({
  reducer: {
    menu: MenuSlice,
    cache: CacheSlice,
  },
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({

// })

// export default store;