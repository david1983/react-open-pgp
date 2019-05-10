import React from "react";
import { observer, inject } from "mobx-react";
import ShowKeys from "./ShowKeys";
import GenKeyForm from "./GenKeyForm"
import Tabs from "./Tabs"

const App = inject("Main")(
    observer(props => {
        const { Main } = props;
        return (
            <div className="App">
                <Tabs />
            </div>
        );
    })
);

export default App