import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Response } from 'express';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';


@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'The user has been successfully created', type: User })
  @ApiResponse({ status: 400, description: "Not registered" })
  async registerUser(@Res() res: Response, @Body() user: User){
    const newUser = await this.userService.registerUser(user)
    if(!newUser){
      return res.status(400).json({message: "Not registered"})
    }
    return res.status(200).json(newUser)
  }

  @Post('/login')
  @ApiOperation({ summary: 'Log in for user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 200, description: 'The user has been successfully log in' , type: User })
  @ApiResponse({ status: 400, description: "Password or email is incorrect" })
  async loginUser(@Res() res: Response, @Body() user: User){
    const newUser = await this.userService.loginUser(user)
    if(!newUser){
      return res.status(400).json({message: "Password or email is incorrect"})
    }
    return res.status(200).json(newUser)
  }

  @Get('/auth')
  @ApiOperation({ summary: 'Authorization of user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully authorization', type: User })
  @ApiResponse({ status: 401, description: "Unauthorized" })
  async getAuthUser(@Res() res: Response, @Body("clientId") clientId: string){
    const user = await this.userService.getAuthUser(clientId)
    if(!user){
      return res.status(401).json({message: "Unauthorized"})
    }
    return res.status(200).json(user)
  }
  }
 
 
