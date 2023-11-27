import './App.css';
import { useState } from 'react';
import Person from './Person';


function App() {
  

  const [show,setShow]=useState(false)

  const handelShow=()=>{ setShow(!show) }

  return (
    <div className="App">

<button onClick={handelShow}>{show? "Hide profile" :"show profile"}</button>
    {
      show && <Person />
    }

    </div>
  );
}

export default App;
