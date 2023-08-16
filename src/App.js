import { useStytchUser } from '@stytch/react';
import Login from './components/Login';
// import Profile from './components/Profile';
import Dashboard from './pages/Dashboard';

const App = () => {
  // The useStytchUser hook will return the existing Stytch User object if one exists
  const { user } = useStytchUser();
  // If there is a user show the profile, otherwise show the login form
  return <div className='container'>{user ? <Dashboard /> : <Login />}</div>;
};

export default App;
