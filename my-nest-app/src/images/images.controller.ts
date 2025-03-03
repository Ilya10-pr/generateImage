import { Controller, Get, Post, Body, Param, Put, Res } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Response } from 'express';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateImageDto } from './dto/create-image.dto';
import { Image } from './entities/image.entity';


@ApiTags('images')
@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  @ApiOperation({summary: "Create new image"})
  @ApiBody({type: CreateImageDto})
  @ApiResponse({ status: 200, description: 'The image has been successfully created', type: Image })
  @ApiResponse({ status: 400, description: "Image not found" })
  async createImage(@Res() res: Response, @Body('prompt') prompt: string) {
    try {
      const image = await this.imagesService.createImage(prompt); 
      if(!image) {
        res.status(400).json({message: "Image not found"})
        return
      }
      return res.status(200).json(image)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: "Internal Server Error"})
      return
    }  
  }
 
  @Get()
  @ApiOperation({summary: "Get all images"})
  @ApiResponse({ status: 200, description: 'Successfully', type: [Image] })
  @ApiResponse({ status: 400, description: "Image not found" })
  async getAllImages(@Res() res: Response){
    try {
      const images = await this.imagesService.getAllImages()
      if(!images){
        res.status(400).json({message: "Image not found"})
      }
      return res.status(200).json(images)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: "Internal Server Error"})
    }
  }

  @Put(":id")
  @ApiOperation({summary: "Update the image"})
  @ApiParam({ name: 'id', description: 'Image ID', type: 'number' })
  @ApiResponse({ status: 200, description: 'The image has been successfully updated', type: Image })
  @ApiResponse({ status: 400, description: "Image not found" })
  async updateImage(@Res() res: Response, @Body('count') count: number, @Param('id') id: number) {
    try {
      const updateImage = await this.imagesService.updateImage(count, id);
      if(!updateImage){
        res.status(400).json({message: "Image wasn`t update"})
      }
      return res.status(200).json(updateImage)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: "Internal Server Error"})
    }
  }
}
