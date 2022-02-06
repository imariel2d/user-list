import React from 'react';

import { useUsers } from './hooks/users';

import { UserCard } from './components/user-card';
import { SearchBar } from './components/search-bar';

import './style/app.css';

export const App = () => {
  const { data, isError, isLoading } = useUsers();

  if (isLoading) {
    return (
      <div>
        <p>loading....</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Error: data can not be found.</p>
      </div>
    );
  }

  return (
    <div className="app">
      <SearchBar />
      <div className="users-wrapper">
        {
          data != null && data.length > 0 ? (
            data.map((user) => (
              <div key={user.id}>
                <UserCard
                  name={user.name}
                  email={user.email}
                  enabled={user.enabled}
                />
              </div>
            ))
          ) : <p>There is no data available!</p>
        }
      </div>
    </div>
  );
};
