import { extname, resolve } from "node:path"
import multer, { FileFilterCallback } from "multer"
import e from "express"

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({

    destination: (_: e.Request, file, cb) => {
        cb(null, resolve(__dirname, "uploads"))
    },
    filename: (_: e.Request, file: Express.Multer.File, callback) => {
        const filename = `${Date.now()}${file.originalname}`
        callback(null, filename)
    },
})

const fileFilter = (req: e.Request, file: Express.Multer.File, callback: FileFilterCallback) => {

    const allowedimg = ["image/jpeg", "image/pjpeg", "image/png", "image/gif"]

    const mimetype: string | undefined = file?.mimetype;

    if (allowedimg.includes(mimetype)) {
        callback(null, true)
    }
    else {
        callback(new Error("Formato de arquivo inválido. Apenas imagens são permitidas."));
    }
}

export default {
    storage,
    fileFilter
}
