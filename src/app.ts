import express from 'express';
import bodyParse from 'body-parser';
import { Url } from './common/constants';
import cors from 'cors';
import { GetData } from './common/data';
import { ExtraRoutes } from './common/routes';

const app: express.Application = express();
const port = Number(process.env.PORT) | 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use(cors({origin: true, credentials: true}));

app.get(Url.get, GetData.get);

/*
  Si se requiere agregar una ruta previa usar:
  app.use('/route',GetRoutes.getList);
*/
app.use(ExtraRoutes.getExtras);
app.use(ExtraRoutes.postExtras);

app.listen(port, () => {
  console.log(`🚀 El servidor esta inicializado en http://localhost:${port} 🚀`);
});
