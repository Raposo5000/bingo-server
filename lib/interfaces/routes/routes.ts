import { Response, Router } from 'express';

const routes = Router();

routes.get('/', (_, res: Response) => {
  res.send('Hello World!');
});

export { routes }

