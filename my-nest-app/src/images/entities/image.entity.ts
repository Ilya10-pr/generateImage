import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Image {
  @ApiProperty({ description: 'The ID of the user', example: "1" })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ description: 'The name of the image', example: 'Cat' })
  @Column()
  name: string;

  @ApiProperty({ description: 'The path to image', example: 'image-1740923159912-1.jpg' })
  @Column()
  path: string;

  @ApiProperty({ description: 'The count like of the image', example: '2' })
  @Column()
  countLike: number;
}

