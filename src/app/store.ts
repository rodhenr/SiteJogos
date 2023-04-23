import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../shared/modalSlice";
import rankingReducer from "../features/ranking/rankingSlice";
import authReducer from "../features/auth/authSlice";
import gameReducer from "../features/game/gameSlice";
import jokenpoReducer from "../features/game/jokenpo/jokenpoSlice";
import unoReducer from "../features/game/uno/unoSlice";

import { apiSlice } from "./apiSlice";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  sidebar: sidebarReducer,
  ranking: rankingReducer,
  auth: authReducer,
  game: gameReducer,
  jokenpo: jokenpoReducer,
  uno: unoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
