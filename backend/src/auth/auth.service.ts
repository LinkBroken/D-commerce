import { BadRequestException, Injectable, Req, UnauthorizedException } from '@nestjs/common';
import { prisma } from 'src/prisma';
import { findByName, findByEmail, createUser } from "../prisma";
import { JwtService } from '@nestjs/jwt';
import { Loginbody, RegisterBody } from './Interfaces';




export const users = prisma.user.findMany()
@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }
    async PostLogin(body: Loginbody) {
        try {
            const User = await prisma.user.findMany({
                where: {
                    email: body.email,
                    password: body.password,
                }
            })
            if (User) {
                const payload = {};
                payload["sub"] = User[0].id
                payload["name"] = User[0].name
                payload["email"] = User[0].email

                return {
                    access_token: await this.jwtService.signAsync(payload)
                }
            }
            else {
                throw new UnauthorizedException("Wrong Credentials")
            }
        }
        catch (err) {

            throw err
        }
    }
    async GetLogin() {
        return ""
    }

    async PostRegister(body: RegisterBody) {
        try {
            const email = await findByEmail(body.email);
            const name = await findByName(body.name)

            if (name) {
                throw new BadRequestException("User already exists")
            }
            else if (email) {
                throw new BadRequestException("Email already exists")
            }
            else {
                await createUser(body.name, body.email, body.password)
                return "User created"
            }
        }
        catch (err) {
            throw err
        }
    }
}
