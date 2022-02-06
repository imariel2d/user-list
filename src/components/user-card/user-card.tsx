import React, { FC } from 'react';
import { useMutation } from 'react-query';

import { User } from '../../types/user';

import './user-card.css';

export const UserCard: FC<Partial<User>> = ({ email, name, enabled }) => {
  const enabledClassName = enabled ? 'enabled' : 'not-enabled';

  return (
    <div className={`user-wrapper ${enabledClassName}`}>
      <p className="user-name">{name}</p>
      <p className="user-email">{email}</p>
    </div>
  )
};
