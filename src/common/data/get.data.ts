import { Request, Response } from 'express';

export class GetData {
  static get = (req: Request, res: Response) => {
    res.json({
      'name': 'Coffee Shop',
      'year': 2022
    });
  }

  static getMenus = (req: Request, res: Response) => {
    res.json([
      {
        image: '',
        name: 'Tasty And Healty',
        price: 15.99,
        beforePrice: 20.99
      },
      {
        image: '',
        name: 'Tasty And Healty',
        price: 17.99,
        beforePrice: 21.99
      },
      {
        image: '',
        name: 'Tasty And Healty',
        price: 18.99,
        beforePrice: 22.99
      },
      {
        image: '',
        name: 'Tasty And Healty',
        price: 26.99,
        beforePrice: 36.99
      },
      {
        image: '',
        name: 'Tasty And Healty',
        price: 10.99,
        beforePrice: 50.99
      },
      {
        image: '',
        name: 'Tasty And Healty',
        price: 33.99,
        beforePrice: 85.99
      }
    ]);
  }

  static getProducts = (req: Request, res: Response) => {
    res.json([
      {
        image: '',
        name: 'Fresh Coffee',
        score: 2.5,
        price: 16,
        beforePrice: 19
      },
      {
        image: '',
        name: 'Fresh Coffee 2',
        score: 3.5,
        price: 19,
        beforePrice: 25
      },
      {
        image: '',
        name: 'Fresh Coffee 3',
        score: 5,
        price: 29,
        beforePrice: 50
      }
    ]);
  }

  static getReviews = (req: Request, res: Response) => {
    res.json([
      {
        comment: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.',
        image: '',
        name: 'John Deo',
        score: 4.5
      },
      {
        comment: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.',
        image: '',
        name: 'John Deo',
        score: 2.5
      },
      {
        comment: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.',
        image: '',
        name: 'John Deo',
        score: 1
      }
    ]);
  }

  static getBlogs = (req: Request, res: Response) => {
    res.json([
      {
        image: '',
        title: 'Tasty And Refreshing Coffee',
        author: 'Martin',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      },
      {
        image: '',
        title: 'Tasty And Refreshing Coffee',
        author: 'Pedro',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      },
      {
        image: '',
        title: 'Tasty And Refreshing Coffee',
        author: 'Jose',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      }
    ]);
  }
}
