import { useQuery } from 'react-query';

import { User } from '../types/user';

export const useUsers = () => {
  const responses = useQuery<User[]>('users', () =>
    fetch('/users')
      .then((res) => res.json()),
  );

  return { ...responses };
};
