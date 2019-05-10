import React from "react";
import { observer, inject } from "mobx-react";

export default inject("Main")(
    observer(({ Main }) => <div>

        {Main.data.loading && <div>Loading</div>}

        {!Main.data.loading && <div>
            <input type="text" onChange={e => Main.setName(e.target.value)} />
            <br />
            <input type="password" onChange={e => Main.setPass(e.target.value)} />
            <br />
            <button onClick={() => Main.genKey()}>generate key</button>
        </div>}
    </div>)
);
