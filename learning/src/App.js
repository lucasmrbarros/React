import style  from './App.module.css';

function App() {
  const age = 19;
  const isGreen = true;

  return (
    <div>
      {age >= 18 ? <h1>All Right</h1> : <h1>Under Age</h1>}
      <h1 style={{color: isGreen ? "green" : "red"}}>This has a colour</h1>
    </div>
  );
}

export default App;  
