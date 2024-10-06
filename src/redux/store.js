import { configureStore } from "@reduxjs/toolkit";
import { persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // використовуємо локальне сховище
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";


// Налаштування персистенції
const persistConfig = {
  key: "root",
  storage,
};

// Створіть persistedReducer
const persistedReducer = persistReducer(persistConfig, authReducer);

// Налаштуйте store з ігноруванням несеріалізованих значень
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    contacts: contactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Створіть persistor
const persistor = persistStore(store);

export { store, persistor };
