import { combineReducers, configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "../shared/modalSlice";
import rankingReducer from "../features/ranking/rankingSlice";
import authReducer from "../features/auth/authSlice";
import tictactoeReducer from "../features/game/tictactoe/tictactoeSlice";
import jokenpoReducer from "../features/game/jokenpo/jokenpoSlice";
import unoReducer from "../features/game/uno/unoSlice";
import yahtzeeReducer from "../features/game/yahtzee/yahtzeeSlice";

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
  tictactoe: tictactoeReducer,
  jokenpo: jokenpoReducer,
  uno: unoReducer,
  yahtzee: yahtzeeReducer,
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
