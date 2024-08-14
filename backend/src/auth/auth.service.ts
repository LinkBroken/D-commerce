import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { prisma } from 'src/utilities/helpers';
import { findByName, findByEmail, createUser } from "../utilities/helpers";
import { JwtService } from '@nestjs/jwt';
import { Loginbody, RegisterBody } from './Interfaces';
import isEmailValid from './validations/email';
import { hasUppercaseLetter, isPasswordMinLength } from './validations/password';


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
            if (name == true && email == false) {
                throw new BadRequestException("User already exists")
            }
            else if (email == true && name == false) {
                throw new BadRequestException("Email already exists")
            }
            else if (email == true && name == true) {
                throw new BadRequestException("Email and username already exists")
            }
            else {
                if (!isEmailValid(body.email)) {
                    throw new BadRequestException("Invalid Email")
                }
                else if (!isPasswordMinLength(body.password)) {
                    throw new BadRequestException("Password at least should be 8 characters")
                }
                else if (!hasUppercaseLetter(body.password)) {
                    throw new BadRequestException("Password should at least contain 1 upper case letter")
                }
                else if (body.name.length < 4) {
                    throw new BadRequestException("Username should at least be 4 characters")
                }
                await createUser(body.name, body.email, body.password)
                return "User created"
            }
        }
        catch (err) {
            throw err
        }
    }
}
