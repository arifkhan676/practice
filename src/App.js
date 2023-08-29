import { createContext, useState, useContext } from 'react';
import './App.css';
import Newcomp from './Comp';
import Home from './comp/Home';
import Navbar from './comp/Navbar';


export const contextAPI = createContext();

function App() {

  const [count, setCount] = useState(0);


  return (
    < contextAPI.Provider value={[count, setCount]} >
      <div className="App">

        <Home count={count} setCount={setCount} />
        <Navbar count={count} setCount={setCount} />




        <Newcomp title="sneakers"
          writeSomething="USA"
        />
        <Newcomp title="shoe"
          writeSomething="from china"
        />
      </div>
    </contextAPI.Provider>
  );
}



export default App;
