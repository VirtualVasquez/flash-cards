import React from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, 
  Route,
} from 'react-router-dom';
import './App.css';

import { AuthProvider} from './context/auth'


import Home from './pages/Home/Home';
import SubjectForm from './pages/SubjectForm/SubjectForm';
// import Nav from './components/Nav'
import Quiz from './pages/Quiz/Quiz';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
          <Route exact path="/" component={Home}/>
          <Route exact path="/subjectForm" component={SubjectForm}/>
          <Route exact path="/quiz" component={Quiz}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
