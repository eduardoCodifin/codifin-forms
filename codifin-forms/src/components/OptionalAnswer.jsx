import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'

function OptionalAnswer(props) {

  const [opAns, setOpAns] = useState({});

  const handleChange =(e)=>{
    setOpAns(
      {
        id: props.id,
        questions: questions[props.id-1].question,
        answer: e.target.value
      }
    );

    
  }
  useEffect(() => {
    props.setSelectedAns(opAns);
  },[opAns]);
  
  return (
    <div key={props.id}>
      <label>{props.answer}</label>
      <input type="radio" name={props.id} onChange={handleChange} required value={props.answer}/>
    </div>
  );
}

export default OptionalAnswer