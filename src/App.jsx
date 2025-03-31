import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TestButton (){
  return(
    <button>TEST</button>
  );
}

function CountMessage({ count }) {
  return (
    <p>{count % 2 === 0 ? "Count is Even " : "Count is Odd "}</p>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const items = ["Red", "Green", "Blue", "Purple", "Orange"];
  const [index, setIndex] = useState(0);

  const handleButtonClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % items.length); 
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Evan was here :)
      </p>
      <TestButton />
      <button onClick={handleButtonClick}> Show Next Color</button>
      <p>{items[index]}</p>
      <CountMessage count={count} />
    </>
  )
}

export default App;