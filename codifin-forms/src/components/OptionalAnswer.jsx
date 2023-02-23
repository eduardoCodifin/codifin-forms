import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'

function OptionalAnswer(props) {

  const [ans, setAns] = useState({});

  const handleChange =(e)=>{
    setAns(
      {
        id: props.id,
        questions: questions[props.id-1].question,
        answer: e.target.value
      }
    );
  }
  /*useEffect(() => {
    console.log(ans)
  },[ans]);*/
  return (
    <div key={props.id}>
      <label>{props.answer}</label>
      <input type="radio" name={props.id} onChange={handleChange} required={true} value={props.answer}/>
    </div>
  );
}

export default OptionalAnswer