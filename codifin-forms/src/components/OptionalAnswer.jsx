import React, { useEffect, useState } from 'react'
import { questions } from '../data/questions'

function OptionalAnswer(props) {
  //Respuestas del la pregunta en cuestión 
  //const answers = questions.map(element=> {if(element.id==props.id) return element.answers} );
  // const[answer, setAnswer] = useState();
  useEffect(() => {
  }, []);

  return (
    <div key={props.id}>
      <label>{props.answer}</label>
      <input type="radio" name={props.id} value={props.answer} />
    </div>
  );
}

export default OptionalAnswer