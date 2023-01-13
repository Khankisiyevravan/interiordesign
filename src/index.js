import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./store/reducer";
const store = legacy_createStore(Reducer);
// import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// "homepage": "http://Khankisiyevravan.githib.io/interior-designs", http://localhost:3000/  
