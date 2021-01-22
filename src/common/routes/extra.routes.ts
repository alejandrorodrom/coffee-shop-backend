import { Router } from 'express';
import { Url } from '../constants';
import { GetData } from '../data';

const router = Router();

export class ExtraRoutes {
  static getExtras = [
    router.get(Url.getExtra, GetData.getExtra),
    router.get(Url.getExtra2, GetData.getExtra2)
  ]
}