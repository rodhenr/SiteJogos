import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../shared/modalSlice";
import rankingReducer from "../features/ranking/rankingSlice";
import authReducer from "../features/auth/authSlice";

import { apiSlice } from "./apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  sidebar: sidebarReducer,
  ranking: rankingReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
