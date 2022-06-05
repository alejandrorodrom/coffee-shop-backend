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
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-1.png?alt=media&token=27717cd1-d322-4460-9367-3ea9f1421a32',
        name: 'Tasty And Healty',
        price: 15.99,
        beforePrice: 20.99
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-2.png?alt=media&token=e64ff078-5d49-445d-b308-8b5249d25815',
        name: 'Tasty And Healty',
        price: 17.99,
        beforePrice: 21.99
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-3.png?alt=media&token=d16b79b6-b3cc-4a06-af03-ca1024dddef1',
        name: 'Tasty And Healty',
        price: 18.99,
        beforePrice: 22.99
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-4.png?alt=media&token=e19d594e-5986-46f4-94ff-70597948f5e0',
        name: 'Tasty And Healty',
        price: 26.99,
        beforePrice: 36.99
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-5.png?alt=media&token=d0127327-ec2c-4784-840a-30ef5002e4bf',
        name: 'Tasty And Healty',
        price: 10.99,
        beforePrice: 50.99
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/menu-6.png?alt=media&token=62b6b0b1-e665-4315-a5d9-906486bde5db',
        name: 'Tasty And Healty',
        price: 33.99,
        beforePrice: 85.99
      }
    ]);
  }

  static getProducts = (req: Request, res: Response) => {
    res.json([
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/product-1.png?alt=media&token=555cab4b-ba9d-41d6-9e1f-17a038d460ae',
        name: 'Fresh Coffee',
        score: 2.5,
        price: 16,
        beforePrice: 19
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/product-2.png?alt=media&token=5d22c7c6-5e5a-4c46-8b0d-3e83512be552',
        name: 'Fresh Coffee 2',
        score: 3.5,
        price: 19,
        beforePrice: 25
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/product-3.png?alt=media&token=447cdae3-216d-4334-a1ea-b94a19aec250',
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
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/pic-1.png?alt=media&token=328c4337-6646-4575-a17f-8cffc97be42c',
        name: 'John Deo',
        score: 4.5
      },
      {
        comment: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.',
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/pic-2.png?alt=media&token=529cf8e3-799e-4b91-b3cb-8d4f4e9ef762',
        name: 'John Deo',
        score: 2.5
      },
      {
        comment: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Animi Nulla Sit Libero Nemo Fuga Sequi Nobis? Necessitatibus Aut Laborum, Nisi Quas Eaque Laudantium Consequuntur Iste Ex Aliquam Minus Vel? Nemo.',
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/pic-3.png?alt=media&token=19fc6832-9ce1-400d-a62a-add08364c3d1',
        name: 'John Deo',
        score: 1
      }
    ]);
  }

  static getBlogs = (req: Request, res: Response) => {
    res.json([
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/blog-1.jpeg?alt=media&token=3fbaed93-b630-49fd-a08f-b8904b54532e',
        title: 'Tasty And Refreshing Coffee',
        author: 'Martin',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/blog-2.jpeg?alt=media&token=0ed2e049-169e-4fb8-a269-068c30d1118a',
        title: 'Tasty And Refreshing Coffee',
        author: 'Pedro',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      },
      {
        image: 'https://firebasestorage.googleapis.com/v0/b/coffee-shop-galaxy.appspot.com/o/blog-3.jpeg?alt=media&token=ce85fed2-7074-472d-b0cc-d9e8d3a572dc',
        title: 'Tasty And Refreshing Coffee',
        author: 'Jose',
        resume: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Non, Dicta.'
      }
    ]);
  }
}
