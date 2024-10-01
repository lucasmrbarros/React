import style  from './App.module.css';
import { User } from './User';

function App() {
  const users = [
    {name: "Lucas", age: 26},
    {name: "Jake", age: 25},
    {name: "jessisca", age: 21}
  ]
  return (
    <div ClassName = "App">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age}/>
      })}
    </div>
  );
}

export default App;  
