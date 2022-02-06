import { v4 as uuidv4 } from 'uuid';

export const users = [
  {
    id: uuidv4(),
    name: 'Ariel Plascencia',
    email: 'imariel2d@gmail.com',
    enabled: true
  },
  {
    id: uuidv4(),
    name: 'Daniel Lacarra',
    email: 'daniel.lacarra@gmail.com',
    enabled: false
  },
  {
    id: uuidv4(),
    name: 'Hector Ibarra',
    email: 'hector.ibarra@gmail.com',
    enabled: false
  },
  {
    id: uuidv4(),
    name: 'Jose Hermenegildo',
    email: 'jose.hermenegildo@gmail.com',
    enabled: true
  }
];
