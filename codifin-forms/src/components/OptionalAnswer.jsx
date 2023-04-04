import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'

function OptionalAnswer(props) {
  const {id, answer,setSelectedAns, setIsFilled, setBackPressed, backPressed } = props;

  const [opAns, setOpAns] = useState({});

  const handleChange =(e)=>{

      setOpAns(
        {
          id: id,
          questions: questions[props.id-1].question,
          answer: e.target.value
        }
      );

    setBackPressed(false);
    setIsFilled(true);
    
  }
  useEffect(() => {
    setSelectedAns(opAns);
  },[opAns]);
  
  return (
    <div key={id}>
      <label>{answer}</label>
      <input type="radio" name={id} onChange={handleChange} required value={answer}/>
    </div>
  );
}

export default OptionalAnswer