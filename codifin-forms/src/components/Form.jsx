import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnswerContent from './AnswerContent'
import SubmitSection from './SubmitSection'
import { questions } from '../data/questions'

const Form = () => {
    const [id, setId] = useState(1);
    const [answers, setAnswer] = useState({});

    const numberQuestions = questions.length;
 
    const previousHandler=()=>{
        setId((prev)=>prev-1)
    };
    const nextHandler=()=>{
        setId((prev)=>prev+1)
    };


    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log('Formulario enviado');
        console.log(answers);
    };
    // ¿Está en la primera pregunta?-> Deshabilita previous
    var first; 
    id === 1 ? first = true: first = false;
    

    // ¿Está en la última pregunta?-> Deshabilita next
    var last;
    id == numberQuestions ? last = true: last = false;


   return (
   
    <div>
        <h2>Pregunta {id}/{numberQuestions}</h2>
        <form onSubmit={handleSubmit}>
            <Question id={id}/>
            <AnswerContent id={id}/>
            <SubmitSection id={id} numberQuestions = {numberQuestions}/>
            <button onClick={previousHandler} style={{display: first ? 'none' : 'block'}}>Previous</button>
            <button onClick={nextHandler} style={{display: last? 'none' : 'block'}}>Next</button>
        </form>
        
        <br></br>
        

    </div>

  )
}

export default Form