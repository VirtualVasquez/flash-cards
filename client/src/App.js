import React from 'react';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import './App.css';


import Home from './pages/Home/Home';
import SubjectForm from './pages/SubjectForm/SubjectForm';
// import Nav from './components/Nav'
import Quiz from './pages/Quiz/Quiz';


function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/FlashCardForm">FlashCardForm</Link>
    //         </li>
    //         <li>
    //           <Link to="/Quiz">Quiz</Link>
    //         </li>

    //       </ul>
    //     </nav>
    //     <Switch>

    //       <Route exact path="/">
    //         <Home />
    //       </Route>

    //       <Route path="/FlashCardForm">
    //         <FlashCardForm />
    //       </Route>

    //       <Route path="/Quiz">
    //         <Quiz />
    //       </Route>
          
    //     </Switch>
    //   </div>

    // </Router>

    <Router>
      <Container>
        <Route exact path="/" component={Home}/>
        <Route exact path="/subjectForm" component={SubjectForm}/>
        <Route exact path="/quiz" component={Quiz}/>
      </Container>
    </Router>

    // <Container id="main-container">
    //   ONLY render nav if logged in
    //   <Nav/>
    //   <Home/>
    // </Container>
  );
}

export default App;
