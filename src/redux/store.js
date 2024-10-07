import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { contactsSliceReducer } from "./contacts/slice";
import { filtersSliceReducer } from "./filters/slice"; // Додано фільтр-редюсер

// Змінено key на 'auth' і додано whitelist
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

// persistReducer з використанням нового config
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsSliceReducer,
    filters: filtersSliceReducer, // Додано filtersSliceReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
