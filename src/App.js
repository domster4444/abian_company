import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.css';

import Header from '../src/components/1atoms/Header';

import HomePage from './components/5pages/HomePage';
import SignUpPage from './components/5pages/SignUpPage';
import LoginPage from './components/5pages/LoginPage';
import ForgotPasswordPage from './components/5pages/ForgotPasswordPage';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
      </Router>
    </div>
  );
}

export default App;
