import axios from "axios";
import { parse, UrlWithParsedQuery } from "url";
import * as path from "path";
import * as fs from "fs"


export const saveImage = async (imageURL, uploadImagesPath) => {
    const parsedUrl: UrlWithParsedQuery = parse(imageURL, true); 
    const queryParams = parsedUrl.query; 
    const format = queryParams.fm as string | undefined;
    const uploadImage = await axios.get(imageURL, { responseType: 'arraybuffer' });
    const uniqueName = Date.now() + '-' + Math.round(Math.random());
    const filename = `image-${uniqueName}.${format}`;
    const filePath = path.join(uploadImagesPath,  filename);
    fs.writeFileSync(filePath, uploadImage.data);
    return filename;
}


export const getImageUrl = async (urlApi) => {
    return await axios.get(urlApi)
    .then(response => {
      const photos = response.data.results;

      if (photos.length > 0) {
        const randomIndex = Math.floor(Math.random() * photos.length);
        const randomPhoto = photos[randomIndex];

        return randomPhoto.urls.regular
      } else {
        null
      }
    })
}