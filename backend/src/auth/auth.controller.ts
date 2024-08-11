import { Loginbody,RegisterBody } from './Interfaces';
import { AuthService } from './auth.service';

import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';

@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {}

    @Post("login")
    // @Redirect("/", 201)
    PostLogin(@Body() body: Loginbody) {
        return this.AuthService.PostLogin(body)
    }
    @Get("login")
    GetLogin() {
        
        return this.AuthService.GetLogin()
    }
    @Post("register")
    @Redirect("/auth/login", 201)
    PostRegister(@Body() body: RegisterBody) {
        return this.AuthService.PostRegister(body)
    }
}
