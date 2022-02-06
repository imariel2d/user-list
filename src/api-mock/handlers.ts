import { rest } from 'msw';

export const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.delay(1500),
      ctx.status(202, 'Mocked status'),
      ctx.json(
        [
          {
            id: 1,
            name: 'Ariel Plascencia',
            email: 'imariel2d@gmail.com',
            enabled: true
          },
          {
            id: 2,
            name: 'Daniel Lacarra',
            email: 'daniel.lacarra@gmail.com',
            enabled: false
          },
          {
            id: 3,
            name: 'Hector Ibarra',
            email: 'hector.ibarra@gmail.com',
            enabled: false
          },
          {
            id: 4,
            name: 'Jose Hermenegildo',
            email: 'jose.hermenegildo@gmail.com',
            enabled: true
          }
        ]
      )
    );
  }),
];
