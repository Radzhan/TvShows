import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Film from './containers/Film/Film';
import Main from './containers/Main/Main';

function App() {


  return (
    <div className="container-fluid">
      <header>
        <div className="alert alert-primary" role="alert">
          TW_Shows
        </div>
      </header>
      <Routes>
        <Route path='/' element={(
          <Main />
        )} />

        <Route path='/show/:id' element={(
          <Film />
        )} />
      </Routes>
    </div>
  );
}

export default App;
