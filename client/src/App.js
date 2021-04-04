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
          <Route exact path="/quiz" component={Quiz}/>
          <Route exact path="/subjects/:subjectId" component={SubjectForm}/>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
