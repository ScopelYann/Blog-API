import e from "express";
import cors from "cors"
import { baseRoutes } from "./routes"
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = e();

app.use(cors())
app.use(e.json())
app.use(baseRoutes)

app.use("/avatar_url", e.static(resolve(__dirname, "config", "uploads")))
app.use("/file-article", e.static(resolve(__dirname, "config", "uploads")))


export default app