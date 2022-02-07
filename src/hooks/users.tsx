import { useQuery } from 'react-query';

import { User } from '../types/user';
import { QuerieKeys } from '../types/querie-keys';

import { API_USER_ROUTE } from '../constants';

export const useUsers = () => {
  const responses = useQuery<User[]>(QuerieKeys.Users, () =>
    fetch(API_USER_ROUTE)
      .then((res) => res.json()),
  );

  return { ...responses };
};
