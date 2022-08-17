import { BrowserRouter } from "react-router-dom";
import App from ".";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from "../Components/redux/store";

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

export default Root;
