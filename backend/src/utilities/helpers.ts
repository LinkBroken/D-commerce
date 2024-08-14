import { PrismaClient } from "@prisma/client";
export const prisma = new PrismaClient();

export const findByName = async (name: string) => {
    const user = await prisma?.user.findMany({
        where: {
            name: name,
        }
    })
    
    return user.length > 0
}
export const findByEmail = async (email: string) => {
    const user = await prisma?.user.findMany({
        where: {
            email: email,
        }
    });
    return user.length > 0
}

export const createUser = async (name: string, email: string, password: string) => {
    await prisma?.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
}

export const addProduct = async (title: string, price: number, image: string, description: string, user_id: number) => {

    const productExist = await prisma?.products.findFirst({
        where: {
            name: title
        }
    })
    productExist == undefined ?
        await prisma?.products.create({
            data: {
                name: title,
                price: price,
                image: image,
                description: description,
                user_id: user_id
            }
        }) : "Product Exist"
}

export const findById = async (id: number) => {
    const user = await prisma?.user.findUnique({

        where: {
            id: id,

        }

    })
    return user
}

export const findProductByUser = async (userId) => {
    const products = await prisma?.products.findMany({
        where: {
            user_id: userId
        },
    })
    return products
}


export const removeProductByUser = async (userId: number, productName: string) => {
    await prisma?.products.deleteMany({
        where: {
            user_id: userId,
            AND: {
                name: productName
            }

        },
    })
}

export default { findByEmail, findByName, findById, createUser, addProduct }