import { configureStore,combineReducers } from "@reduxjs/toolkit";
import getContacts from './contactslice';
import {filterReducer} from './filterslice';
// export const store = configureStore({
//   reducer: {
//     contacts: getContacts,
//     filter: filterReducer,
//   },
// });



import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: getContacts,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)









