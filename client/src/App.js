import React from 'react';
// import {BrowserRouter as Router, 
//   Switch, 
//   Route,
//   Link
// } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';


import Home from './pages/Home/Home';
// import FlashCardForm from './pages/FlashCardForm';
// import Quiz from './pages/Quiz';

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
    <Container className="vertical-center text-center">
    <Home />
    </Container>
  );
}

export default App;
