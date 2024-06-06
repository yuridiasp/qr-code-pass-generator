import prompt from "prompt";

import { PromptSchemaMain } from "./prompts-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js"

(async function main() {
    prompt.get(PromptSchemaMain, async (err, choose) => {

        if (err) {
            console.log("Error on application: " + err);
            return;
        }

        if (choose.select == 1) {
            createQRCode()
        }

        if (choose.select == 2) {
            createPassword()
        }
    });

    prompt.start()
})();