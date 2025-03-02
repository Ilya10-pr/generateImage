import { Controller, Get, Post, Body, Param, Put, Res } from '@nestjs/common';
import { ImagesService } from './images.service';
import { Response } from 'express';

@Controller('images')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post()
  async createImage(@Res() res: Response, @Body('prompt') prompt: string) {
    try {
      const image = await this.imagesService.createImage(prompt); 
      if(!image) {
        res.status(404).json({message: "Image not found"})
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
  async getAllImages(@Res() res: Response){
    try {
      const images = await this.imagesService.getAllImages()
      if(!images){
        res.status(404).json({message: "Image not found"})
      }
      return res.status(200).json(images)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: "Internal Server Error"})
    }
  }

  @Put(":id")
  async updateImage(@Res() res: Response, @Body('count') count: number, @Param('id') id: number) {
    try {
      const updateImage = await this.imagesService.updateImage(count, id);
      if(!updateImage){
        res.status(404).json({message: "Image wasn`t update"})
      }
      return res.status(200).json(updateImage)
    } catch (error) {
      console.log(error.message)
      res.status(500).json({message: "Internal Server Error"})
    }
  }
}
