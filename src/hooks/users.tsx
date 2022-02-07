import { useQuery } from 'react-query';

import { User } from '../types/user';
import { QuerieKeys } from '../types/querie-keys';

export const useUsers = () => {
  const responses = useQuery<User[]>(QuerieKeys.Users, () =>
    fetch('/users')
      .then((res) => res.json()),
  );

  return { ...responses };
};
