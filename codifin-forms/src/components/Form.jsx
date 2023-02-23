import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnswerContent from './AnswerContent'
import SubmitSection from './SubmitSection'
import { questions } from '../data/questions'

const Form = () => {
    const [id, setId] = useState(1);
    const numberQuestions = questions.length;

    useEffect(()=>{
       
    },[id]);
 
    const previousHandler=()=>{
        setId((prev)=>prev-1)
    };
    const nextHandler=()=>{
        setId((prev)=>prev+1)
    };

    // ¿Está en la primera pregunta?-> Deshabilita previous
    var first;
    if(id===1){
        first=true;
    }
    else{
        first= false;
    }

    // ¿Está en la última pregunta?-> Deshabilita next
    var last;
    if(id=== numberQuestions){
        last=true;
    }
    else{
        last= false;
    }


   return (
   
    <div>
        <h2>Pregunta {id}/{numberQuestions}</h2>
        <form>
            <Question id={id}/>
            <AnswerContent id={id}/>
        </form>
        <button onClick={previousHandler} disabled={first}>Previous</button>
        <button onClick={nextHandler} disabled={last}>Next</button>
        <br></br>
        <SubmitSection id={id} numberQuestions = {numberQuestions}/>
    </div>

  )
}

export default Form