import { Injectable } from '@nestjs/common';


export interface data {
    name: string,
    status: string
}
export interface ErrorMessage {
    message: string
}
const Data = [{
    name: "omer",
    status: "online"
}]
@Injectable()
export class BooksService {
    getAllBooks(): data[] {
        return Data;
    }
    getCertainBook(id:number): string {
        return `this is the ${id} book`;
    }
    postCertainDBook(body: data): string | ErrorMessage {
        try {
            Data.forEach((item) => {
                if (item.name === body.name) {

                    throw new Error(`${body.name} is already in the database`)

                }
            })
            Data.push(body);
            console.log(`${body.name} is ${body.status}`);

        } catch (err) {
            const errorResponse: ErrorMessage = { message: err.message };
            console.log(errorResponse.message)
            return errorResponse?.message
        }
    }
}
