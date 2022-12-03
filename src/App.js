import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Edit_page from './components/edit';
import Shopping from './components/shopping';
import Edit_shopping from './components/shopping_edit';
import ReactDOM from 'react-dom';
import Error404 from './components/error404';



function App() {
  return (
   
    <div className='App'   style={{
      backgroundColor: 'black',
    }}
      >
       <React.Fragment>
        <Router>
          <Routes>
            <Route  exact path="/"  element={<Home/>}/>
            <Route   path="/edit/:id"  element={<Edit_page/>}/>
            <Route   path="/shopping"  element={<Shopping/>}/>
            <Route   path="/shopping/:id"  element={<Edit_shopping/>}/>
            <Route   path="*"  element={<Error404/>}/>
          </Routes>
        </Router>
      </React.Fragment>
    </div>
   
  );
}

export default App;
