import React, { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

export const AddUser = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const onClick = () => {
    axios.post('/user', {
      id: 0,
      name,
      email,
      enabled: true
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
