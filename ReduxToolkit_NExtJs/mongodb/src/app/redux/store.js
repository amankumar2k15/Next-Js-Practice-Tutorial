const { configureStore } = require("@reduxjs/toolkit");
import UserReducer from "./userslice";

const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

export default store;