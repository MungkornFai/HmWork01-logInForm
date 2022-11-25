import React from 'react';
import './User.css';

function User() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className='admin_card'>
      <div className='circle'></div>
      <h1>Users</h1>
      <button onClick={handleClick} className='logOut'>
        Log out
      </button>
    </div>
  );
}

export default User;
