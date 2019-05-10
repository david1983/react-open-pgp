import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(props => {
        const { Main } = props
        const { key } = Main.data;
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
                            <textarea onChange={e => Main.importKey(k, e.target.value)}>
                            </textarea>
                        </div>
                    ))}
            </div>
        );
    })
);
