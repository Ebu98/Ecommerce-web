import { combineReducers } from 'redux';
import cartReducer from './cart/cart.reducer';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import shopReducer from './shop/Shop.Reducer';

import userReducer from './user/user.reducer';
import directoryReducer from './directory/directory.Reducer';

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['cart']
}
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  diretory: directoryReducer,
  shop: shopReducer
});


export default persistReducer( persistConfig, rootReducer )