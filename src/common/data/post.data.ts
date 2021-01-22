import { Request, Response } from 'express';

export class PostData {
  static post = (req: Request, res: Response) => {
    res.json({
      'token': '6fds2f1498dvsf429fs8fsd'
    });
  }

  static postError = (req: Request, res: Response) => {
    res.status(500).json({
      'msg': 'Error'
    });
  }
}