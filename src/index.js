// global 
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// local 
import store from "./store/index";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
