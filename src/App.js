import { BrowserRouter as Router, Route } from 'react-router-dom';
import './scss/main.css';

import Header from '../src/components/1atoms/Header';

import HomePage from './components/5pages/HomePage';
import SignUpPage from './components/5pages/SignUpPage';
import LoginPage from './components/5pages/LoginPage';
import ForgotPasswordPage from './components/5pages/ForgotPasswordPage';
import PageNotFound from './components/5pages/PageNotFound';
import Service from './components/5pages/Service.js';
import Process from './components/5pages/Process.js';
import AboutUs from './components/5pages/AboutUs.js';
import Pricing from './components/5pages/Pricing';
import OurTeam from './components/5pages/OurTeam';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/404" component={PageNotFound} />
        <Route path="/service" component={Service} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/process" component={Process} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/ourteam" component={OurTeam} />
      </Router>
    </div>
  );
}

export default App;
