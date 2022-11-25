import React from 'react';
import './Admin.css';

function Admin() {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="admin_card">
      <div className="circle"></div>
      <h1>Admin</h1>
      <button onClick={handleClick} className="logOut">Log out</button>
    </div>
  );
}

export default Admin;
