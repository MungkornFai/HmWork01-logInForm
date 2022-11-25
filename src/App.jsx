import { Route, Routes } from 'react-router-dom';
import SignInform from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<SignInform />} />
        <Route path='/signupform' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
