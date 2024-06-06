import prompt from "prompt";
import handler from "./handle.js";
import { PromptSchemaQRCode } from "../../prompts-schema/prompt-schema-qrcode.js";

async function createQRCode() {
    prompt.get(PromptSchemaQRCode, handler);
    
    prompt.start();
};

export default createQRCode;