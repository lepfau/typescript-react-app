import React, {useState} from 'react';
import './App.css';
import { TextField } from './TextField';
import PersonScoreForm from './PersonScoreForm';

const App: React.FC = () => {

const [bool, setBool] = useState<boolean>(false)

const handleClick = () => {
setBool(!bool)
}




  return (
  <div>
    <TextField text='hello i am props' subtext={33} istrue={bool}
    fn={handleClick}/>
    <PersonScoreForm/>

  </div>
  )
}

export default App;
