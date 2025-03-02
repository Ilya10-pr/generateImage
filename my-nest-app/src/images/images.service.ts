import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
import * as path from 'path';
import { getImageUrl, saveImage } from 'src/helpers';
import { keys } from 'src/keys';

@Injectable()
export class ImagesService {
  private readonly uploadImagesPath = path.join("src", "uploadImages" )

  constructor(@InjectRepository(Image)
  private imageRepository: Repository<Image>
  
){}

  async createImage(prompt: string) {
    const urlApi = `https://api.unsplash.com/search/photos?query=${prompt}&client_id=${keys.ACCESS_KEY}`;
    const imageURL = await getImageUrl(urlApi)
    if(!imageURL){
      return null 
    } 

    const imageName = await saveImage(imageURL, this.uploadImagesPath) //сохраняем на сервере изображение retern имя файла
    const url = `http://localhost:3000/images/${imageName}`
    const image = {name: prompt, path: url, countLike: 0 }
    return this.imageRepository.save(image)
  }

  async getAllImages() {
    return this.imageRepository.find()
  }

  async updateImage(count: number, id: number) {
    const image = await this.imageRepository.findOne({where: {id}})
    if(image) {
        if (count > 0) {
          image.countLike += 1; 
        } else {
          image.countLike = Math.max(0, image.countLike - 1);
        }
        await this.imageRepository.save(image)
      }

      return this.imageRepository.findOne({where: {id}});
    }
  

}
