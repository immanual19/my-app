import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      {user ? <p>Signed In</p> : <p>Not Signed In</p>}
      <button onClick={logout}>Log Out</button>
    </div>
  );
};

export default Dashboard;
