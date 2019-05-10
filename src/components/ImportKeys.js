import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(props => {
        const { key } = props.Main.data;
        if (!key) return <div>key not available</div>;
        return (
            <div>
                {[
                    "privateKeyArmored",
                    "publicKeyArmored",
                    "revocationCertificate"
                ].map(
                    k => (
                        <div key={k}>
                            <h5>{k}</h5>
                            <pre>{key[k]}</pre>
                        </div>
                    ))}
            </div>
        );
    })
);
