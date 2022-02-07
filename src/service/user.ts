import axios from 'axios';

import { User } from '../types/user';
import { API_USER_ROUTE } from '../constants';

export const addUser = (user: User): Promise<User> => {
  return axios.post(API_USER_ROUTE, {
    ...user
  });
};
