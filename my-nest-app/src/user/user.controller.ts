import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Response } from 'express';



@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  async registerUser(@Res() res: Response, @Body() user: User){
    const newUser = await this.userService.registerUser(user)
    if(!newUser){
      return res.status(404).json({message: "Not registered"})
    }
    return res.status(200).json(newUser)
  }

  @Post('/login')
  async loginUser(@Res() res: Response, @Body() user: User){
    const newUser = await this.userService.loginUser(user)
    if(!newUser){
      return res.status(404).json({message: "Password or email is incorrect"})
    }
    return res.status(200).json(newUser)
  }

  @Get('/auth')
  async getAuthUser(@Res() res: Response, @Body("clientId") clientId: string){
    const user = await this.userService.getAuthUser(clientId)
    if(!user){
      return res.status(401).json({message: "Unauthorized"})
    }
    return res.status(200).json(user)
  }
  }
 
 
