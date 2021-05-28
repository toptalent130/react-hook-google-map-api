import React from 'react';
import { Route } from "react-router-dom";
import FirstPage from './pages/firstPage';
import SecondPage from './pages/secondPage';
import ThirdPage from './pages/thirdPage';

function App() {
  return (
      <div>
        <Route path="/" exact component={FirstPage} />
        <Route path="/second" exact component={SecondPage} />
        <Route path="/third" exact component={ThirdPage} />
      </div>
  );
}

export default App;
 