import chalk from "chalk";
import handler from "./handle.js";


async function createPassword() {
    console.log(chalk.green("Password created successfully:\n"));
    const password = await handler();

    console.log(password + "\n");
}

export default createPassword;