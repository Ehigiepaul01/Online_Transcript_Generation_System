import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css'; 
import Main from './components/Main';
import SignIn from './components/SignIn';
// import './font-awesome.min.css'; // Import font-awesome CSS

function App() {
  return ( 
 
   <div className="App">
      <Routes>
      <Route path='/signin' element={<SignIn />}/>
      <Route path='/' element={<Main />}/>
    </Routes>
    </div>

    
 
   
  );
}

export default App;
