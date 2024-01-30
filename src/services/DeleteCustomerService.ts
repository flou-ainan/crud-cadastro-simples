import prismaClient from "../prisma";

interface DeleteCustomerProps{
    id: string
}

class DeleteCustomerService {
    async execute({id}: DeleteCustomerProps){
        if (!id){
            throw new Error("Insira uma ID")
        }
        
        // find customer by id
        const customer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if(!customer){
            throw new Error("ID inexistente")
        }

        await prismaClient.customer.delete({
            where:{
                id: customer.id
            }
        })

        return {message: "Cliente deletado com sucesso"}
    }
}


export {DeleteCustomerService}