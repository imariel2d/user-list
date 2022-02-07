import React, { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { addUser } from '../../service/user';

import { User } from '../../types/user';
import { QuerieKeys } from '../../types/querie-keys';

export const AddUser = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const queryClient = useQueryClient();

  const { mutate } = useMutation<User, void, User>(QuerieKeys.Users, addUser, {
    onMutate: async (newUser) => {
      await queryClient.cancelQueries(QuerieKeys.Users);

      const previousUsers = queryClient.getQueriesData(QuerieKeys.Users);

      queryClient.setQueriesData<User[]>(QuerieKeys.Users, (old) => {
        if (old){
          return [...old, newUser];
        }

        return [];
      });

      return previousUsers;
    },
    onError: (error, newUser, context) => {
      queryClient.setQueriesData(QuerieKeys.Users, context);
    },
    onSettled: () => {
      queryClient.invalidateQueries(QuerieKeys.Users);
    },
  });

  const onClick = () => {
    mutate({
      id: '',
      name,
      email,
      enabled: true,
    });
  };

  const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const onEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" placeholder="Username" value={name} onChange={onNameChange} />
      <input type="text" placeholder="email" value={email} onChange={onEmailChange} />
      <button onClick={onClick}>Submit</button>
    </div>
  );
};
