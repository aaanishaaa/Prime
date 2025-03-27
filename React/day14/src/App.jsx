import React from 'react'
import { useState } from 'react'
import './App.css'
import Form2 from './components/Form2'
import Card from './components/Card'

const App = () => {



  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);




  const handleSubmit= (e)=>{
    e.preventDefault();
    setIsSubmitted(true);

};

  return (

    <div className='app'>
      {isSubmitted ? (
          <Card name={name} email={email}/>
        ) : (
          <Form2 setName={setName} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit}/>
        )
      }
    </div>
  )
}

export default App
