import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(({ Main }) => <div>
        <h2>Generate keys</h2>

        <p>
            You can generate private and public keys by providing a username and a password
        </p>

        {Main.data.loading && <div>Loading</div>}

        {!Main.data.loading && <div>

            {!Main.data.generated && <div>
                <input type="text" placeholder="name" onChange={e => Main.setName(e.target.value)} />
                <br />
                <input type="password" placeholder="secret" onChange={e => Main.setPass(e.target.value)} />
                <br />
                <button onClick={() => Main.genKey()}>generate key</button>
            </div>}

            {Main.data.generated && <div>
                <button onClick={() => Main.resetKeys()}>reset keys</button>
            </div>}

        </div>}
    </div>)
);
