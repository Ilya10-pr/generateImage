import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ description: 'The unique ID of the user', example: '1234' })  
  clientId: string;

  @ApiProperty({ description: 'The name of the user', example: 'John Doe' })
  name: string;

  @ApiProperty({ description: 'The email of the user', example: 'jhon@gmail.com' })
  email: string;

  @ApiProperty({ description: 'The password of the user', example: '1111' })
  password: string;

  @ApiProperty({ description: 'User account is premium', example: "false or true" })
  hasPremium: boolean;
}
