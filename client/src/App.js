import React from 'react';
// import {BrowserRouter as Router, 
//   Switch, 
//   Route,
//   Link
// } from 'react-router-dom';
import './App.css';


import Home from './pages/Home/Home';
import SubjectForm from './pages/SubjectForm/SubjectForm';
import Nav from './components/Nav'
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
    <div>
      {/* <Home/> */}
      <SubjectForm/>
    </div>
  );
}

export default App;
