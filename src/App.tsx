import React from 'react';
import './App.css';
import PropsInClassComponents from './components/PropsInClassComponents';
import PropsInFunComponents from './components/PropsInFunComponenets';
// import UserList from "./components/UserList";

function App() {
  return (
    <React.Fragment>
       <PropsInFunComponents name={"Jay"}/>
       <PropsInClassComponents name={"Jay"}/>
    </React.Fragment>
  );
}

export default App;
