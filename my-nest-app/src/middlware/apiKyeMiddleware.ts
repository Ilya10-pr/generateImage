import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { keys } from 'src/keys';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware { //апи кей с клиента 
  use(req: Request, res: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === keys.API_KEY_CLIENT) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden' });
    }
  }
}