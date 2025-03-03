import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {

  @ApiProperty({ description: 'The ID of the user', example: "1" })
  @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ description: 'The unique ID of the user', example: '1234' })  
    @Column()
    clientId: string;

    @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
    @Column()
    name: string;

    @ApiProperty({ description: 'The email of the user', example: 'jhon@gmail.com' })
    @Column()
    email: string;

    @ApiProperty({ description: 'The password of the user', example: '1111' })
    @Column()
    password: string;

    @ApiProperty({ description: 'User account is premium', example: false })
    @Column({default: false})
    hasPremium: boolean;
}
