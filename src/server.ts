import jsonServer from "json-server";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const server = jsonServer.create()
const router = jsonServer.router('./mock/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.use(cors())

server.listen(process.env.PORT || 5000, () => {
    console.log(`JSON Server is running on port ${process.env.PORT}`)
})

