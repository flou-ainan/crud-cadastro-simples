import { FastifyInstance,
         FastifyPluginOptions,
         FastifyRequest,
         FastifyReply
        } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController"
import { ListCustomersController} from "./controllers/ListCustomersController"
import { DeleteCustomerController } from "./controllers/DeleteCustomerController"

export async function routes(fastfy: FastifyInstance, options: FastifyPluginOptions) {
    // rota teste
    fastfy.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        
        return {ok: true}
    })

    //Rota new customer
    fastfy.post("/customer", async (request: FastifyRequest, reply: FastifyReply)=> {
        return new CreateCustomerController().handle(request, reply)
    })

    //Rota List Customers
    fastfy.get("/list-customers", async (request: FastifyRequest, reply: FastifyReply)=>{
        const response = await new ListCustomersController().handle(request, reply)
        console.log(response)
        return response
    })

    //Rota delete Customer
    fastfy.delete("/customer", async (request: FastifyRequest, reply: FastifyReply)=>{
        const response = await new DeleteCustomerController().handle(request, reply)
        console.log(response)
        return response
    })



}