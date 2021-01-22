import { Request, Response } from 'express';

export class GetData {
  static get = (req: Request, res: Response) => {
    res.json({
      'name': 'Alejandro',
      'year': 2021
    });
  }
  static getExtra = (req: Request, res: Response) => {
    res.send('Extra 1');
  }
  static getExtra2 = (req: Request, res: Response) => {
    res.send({
      'get': 'Extra 2'
    });
  }
}
