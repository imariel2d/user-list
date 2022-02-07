import axios from 'axios';

import { User } from '../types/user';

export const addUser = (user: User): Promise<User> => {
  return axios.post('/user', {
    ...user
  });
};
