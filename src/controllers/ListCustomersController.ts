import { FastifyRequest, FastifyReply } from "fastify"
import { ListCustomersService } from "../services/ListCustomersService"

class ListCustomersController {
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listCustomersService = new ListCustomersService()

        const customersList = await listCustomersService.execute()
        
        console.log("List Controller "+customersList)
        reply.send(customersList)
    }
}

export {ListCustomersController}