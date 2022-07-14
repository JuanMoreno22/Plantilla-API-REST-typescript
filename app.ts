import dotenv from "dotenv";
import Server from "./services/server";
// configurar dotenv
dotenv.config();


const server= new Server();
server.listen();