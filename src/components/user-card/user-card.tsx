import React, { FC } from 'react';

import { User } from '../../types/user';

import './user-card.css';

export const UserCard: FC<Partial<User>> = ({ email, name }) => (
  <div className="user-wrapper">
    <p className="user-name">{name}</p>
    <p className="user-email">{email}</p>
  </div>
);
