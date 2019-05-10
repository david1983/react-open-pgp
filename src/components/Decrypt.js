import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(props => {
        const { Main } = props
        const { key } = Main.data;
        if (!key) return <div>key not available</div>;
        return (
            <div>
                <h3>Decrypt a message</h3>
            </div>
        );
    })
);
