import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import rankingReducer from "./slices/rankingSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    modals: modalReducer,
    ranking: rankingReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
