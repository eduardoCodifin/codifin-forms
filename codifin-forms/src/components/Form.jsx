import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnswerContent from './AnswerContent'
import SubmitSection from './SubmitSection'
import { questions } from '../data/questions'

const Form = () => {
    const [id, setId] = useState(1);
    const [answers, setAnswer] = useState([]);

    const numberQuestions = questions.length;

     useEffect(() => {
        console.log(answers)
    },[id]);
 
    const setData = (data)=>{
        let answered = false;
       answers.forEach(ansObj=>{
            if(ansObj.id === data.id){
                answered = true;
              //  setAnswer(answers[])
            }
        });
        if(!answered){
            setAnswer((prev)=>[...prev, data]);
        }
        
    };
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
            <AnswerContent id={id} setData = {setData} previousHandler={previousHandler} nextHandler={nextHandler}
            first={first} last={last}/>
            <SubmitSection id={id} numberQuestions = {numberQuestions}/>
        </form>
        
        <br></br>
        

    </div>

  )
}

export default Form