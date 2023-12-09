import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import Costs from './components/Costs';

function App() {
  const [costs, setCosts] = useState([]);

  let addCosts = (cost) =>{
    setCosts([...costs , cost]);
  }

  return (
    <div className='main'>
      <Form onSubmitHandler={addCosts}/>
      {
        costs.map((item , index) =>{
          return <Costs  key={index} cost={item}/>
        })
      }
    </div>
  )
}

export default App
