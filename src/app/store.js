import { configureStore } from "@reduxjs/toolkit";

const rootReducer = {
   // user: authReducer,
   // theme: themeReducer,
   // option: optionsReducer,
};

const store = configureStore({
   reducer: rootReducer,
});

export default store;
