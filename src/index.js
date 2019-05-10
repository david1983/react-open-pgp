import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import Stores from "./stores/stores";
import App from "./components/App"


const rootElement = document.getElementById("root");

ReactDOM.render(
    (<Provider {...Stores}>
        <App />
    </Provider>),
    rootElement
);
