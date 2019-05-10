import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(props => {
        const { key } = props.Main.data;
        if (!key) return <div>key not available</div>;
        return (
            <div>
                <h2>Your keys</h2>

                <pre>
                    The followings are your private/public and revocation keys.
                    You can save them to your local
                </pre>

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
