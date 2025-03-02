import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User)
  private userRepository: Repository<User>  
){}

  async registerUser(user: User) {
    const newUser = await this.userRepository.save(user);
    if(!newUser){
      return null
    }
    return newUser
  }
  
  async loginUser(user: User) {
    const candidate = await this.userRepository.findOne({where:{email: user.email}})
    if(!candidate){
      return null
    }
    if(candidate.password === user.password){
      return candidate
    }
    return null
  }

  async getAuthUser(clientId: string){
    if(!clientId){
      return null
    }
    const user = await this.userRepository.findOne({where: {clientId}})
    if(!user){
      return null
    }
    return user
  }
}
