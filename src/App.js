import UserForm from './componentes/UserForm';
import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState ({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  return (
    <div className="App">
      <UserForm state={state} setState={setState}/>
    </div>
  );
}

export default App;
