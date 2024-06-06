import chalk from "chalk";

const PromptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QR CODE"),
        pattern: /(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)\b/,
        message: chalk.red.italic("Digite um link válido"),
        required: true,
    },
    {
        name: "type",
        description: chalk.yellow("Escolha o tipo (1 - NORMAL ou 2 - TERMINAL)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true,
    }
];

export { PromptSchemaQRCode };