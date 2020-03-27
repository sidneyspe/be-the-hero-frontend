import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'be-the-hero',
      storage,
    },
    reducers
  );

  return persistedReducer;
};
