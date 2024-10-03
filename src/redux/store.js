import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // Інші ред'юсери можна додавати тут
  },
});

export { store }; // Використовуємо іменований експорт
