import { combineReducers, configureStore } from "@reduxjs/toolkit";

import modalReducer from "../features/sidebar/modalSlice";
import rankingReducer from "../features/ranking/rankingSlice";
import authReducer from "../features/auth/authSlice";
import generalInfoReducer from "../features/matches/generalInfoSlice";

import { apiSlice } from "./apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  modals: modalReducer,
  ranking: rankingReducer,
  auth: authReducer,
  generalInfo: generalInfoReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
