import { useQuery } from 'react-query';

import { User } from '../types/user';

export const useUsers = () => {
  const responses = useQuery<User[]>('users', () =>
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json()),
  );

  return { ...responses };
};
