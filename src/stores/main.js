import { observable } from "mobx";
import openpgp from "openpgp";

class Main {
    constructor() {
        this.data = observable({
            name: "",
            pass: "",
            key: {},
            loading: false,
            generated: false
        });
    }

    setName(name) {
        this.data.name = name;
    }

    setPass(pass) {
        this.data.pass = pass;
    }

    resetKeys() {
        this.data = {
            name: "",
            pass: "",
            key: {},
            loading: false,
            generated: false
        }
    }

    importKey(k, v) {
        this.data.key[k] = v
    }

    genKey() {
        this.data.loading = true
        const { name, pass } = this.data;
        const options = {
            userIds: [{ name }], // multiple user IDs
            numBits: 4096, // RSA key size
            passphrase: pass // protects the private key
        };
        openpgp.generateKey(options).then(key => {
            this.data.loading = false
            this.data.generated = true
            this.data.key = key;
        });
    }
}

export default new Main();
