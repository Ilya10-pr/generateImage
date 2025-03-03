import { ApiProperty } from "@nestjs/swagger";

export class CreateImageDto {
    @ApiProperty({ description: 'The name of the image', example: 'Cat' })
    name: string;
  
    @ApiProperty({ description: 'The path to image', example: 'image-1740923159912-1.jpg' })
    path: string;
  
    @ApiProperty({ description: 'The count like of the image', example: '2' })
    countLike: number;
}
