import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from "./UserInput/UserInput";
import ValidationText from "./ValidationText/ValidationText";


function App() {

  const [state, setState] = useState("Insert your text");


  return (
      <div>
        <UserInput value={state} changeListener={(event)=> setState(event.target.value)}/>
        <button style={{display: 'inline-block'}} onClick={()=> setState("")}>Clear</button>
        <br/>
        <ValidationText value={state} length={state.length} clickListener={(value) => setState(value)}/>
      </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
