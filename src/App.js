import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className=''></header>
      <h1>Welcome to the Stytch login</h1>
      <Login />
      <a
        href='https://test.stytch.com/v1/public/oauth/google/start?public_token=public-token-test-49f607c3-8c98-4779-8592-16393e21855e'
        target='_blank'
        rel='noopener noreferrer'>
        LOGIN
      </a>
    </div>
  );
}

export default App;
