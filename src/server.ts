import Fastify from "fastify";
import { FastifyListenOptions } from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors"

const port = process.env.PORT || 3000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;

const app = Fastify({ logger: true})

app.setErrorHandler((error, request, reply)=>{
    reply.code(400).send({message: error.message})
})

const start = async () => {

    await app.register(cors)
    await app.register(routes)
    
    try{
        await app.listen({host: host, port: port } as FastifyListenOptions)

    }catch(err){
        process.exit(1)
    }
}

start();