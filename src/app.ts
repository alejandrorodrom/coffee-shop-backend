import express from 'express';
import bodyParse from 'body-parser';
import { Url } from './common/constants';
import { GetData, PostData } from './common/data';
import { ExtraRoutes } from './common/routes';

const app: express.Application = express();
const port = 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.get(Url.get, GetData.get);

app.post(Url.post, PostData.post);

/*
  Si se requiere agregar una ruta previa usar:
  app.use('/route',GetRoutes.getList);
*/
app.use(ExtraRoutes.getExtras);

app.listen(port, () => {
  console.log(`🚀 El servidor esta inicializado en http://localhost:${port} 🚀`);
});