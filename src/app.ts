import e from "express";
import cors from "cors"
import {baseRoutes} from "./routes"

const app = e();

app.use(cors())
app.use(e.json())
app.use(baseRoutes)


export default app