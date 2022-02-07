import { rest } from 'msw';
import { v4 as uuidv4 } from 'uuid';

import { users } from './users';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json([...users])
    );
  }),
  rest.post('/user', (req, res, ctx) => {
    const { body } = req;
    const user = {
      // @ts-ignore
      ...body,
      id: uuidv4(),
    };

    users.push(user);

    return res(
      ctx.status(201, 'Mocked status'),
      ctx.json(user),
    );
  }),
];
