import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import rankingReducer from "./slices/rankingSlice";
import tokenReducer from "./slices/tokenSlice";

export const store = configureStore({
  reducer: {
    modals: modalReducer,
    ranking: rankingReducer,
    token: tokenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
