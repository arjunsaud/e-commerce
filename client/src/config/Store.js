import authReducer from "../Slices/authSlice";
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

// export default configureStore({
//   reducer: {
//     auth: authReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import cartReducer from "../Slices/cartSlices"
//import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  auth: authReducer,
  cart:cartReducer
});


const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer:persistedReducer,
  middleware:[thunk]
});



export const persistor = persistStore(store)