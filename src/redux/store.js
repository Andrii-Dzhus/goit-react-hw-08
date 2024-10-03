import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // використовуємо локальне сховище
import { authReducer } from "./auth/slice";

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
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"], // Ігноруємо дії, пов'язані з персистенцією
        ignoredPaths: ["auth.register"], // Якщо у вас є специфічні шляхи, які потрібно ігнорувати
      },
    }),
});

// Створіть persistor
const persistor = persistStore(store);

export { store, persistor };
