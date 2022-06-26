import { Router } from 'express';
import { Url } from '../constants';
import { GetData, PostData } from '../data';

const router = Router();

export class ExtraRoutes {
  static getExtras = [
    router.get(Url.getMenus, GetData.getMenus),
    router.get(Url.getProducts, GetData.getProducts),
    router.get(Url.getReviews, GetData.getReviews),
    router.get(Url.getBlogs, GetData.getBlogs),
  ];

  static postExtras = [
    router.post(Url.postAuth, PostData.postAuth),
    router.post(Url.postRegister, PostData.postRegister),
    router.post(Url.postContact, PostData.postContact),
    router.post(Url.postBuy, PostData.postBuy)
  ];
}
