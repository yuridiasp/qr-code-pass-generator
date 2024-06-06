import qr from "qrcode-terminal";
import chalk from "chalk";

async function handler (err, { link, type }) {

    if (err) {
        console.log("Error on application: " + err);
        return;
    }

    const isSmall = type == 2;

    qr.generate(link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("QR Code created successfuly:\n"));
        console.log(qrcode);
    });
};

export default handler;