import { Request, Response } from 'express';

export class PostData {
  static postAuth = (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email === 'test@test.com' && password === 'test') {
      res.status(200).json({
        'token': '6fds2f1498dvsf429fs8fsd45',
        'user': 'Alejandro Rodriguez',
        'email': 'test@test.com'
      });
    } else {
      res.status(400).json({
        'error': 'Wrong email or password'
      });
    }

  };

  static postRegister = (req: Request, res: Response) => {
    const email = req.body.email;
    const password = req.body.password;

    res.status(200).json({
      'token': '6fds2f1498dvsf429fs8fsd45',
      'email': password
    });

  };

  static postContact = (req: Request, res: Response) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;

    res.status(200).json({
      'message': `Gracias ${name} por contactarnos, nos estaremos contactando a ${phone} o a ${email}`
    });
  };

  static postBuy = (req: Request, res: Response) => {
    const products = req.body.products;

    if (products.length) {
      res.status(200).json({
        'message': 'Successful purchase',
        'products': products.length
      });
    } else {
      res.status(400).json({
        'error': 'Failed purchase'
      });
    }
  };
}
