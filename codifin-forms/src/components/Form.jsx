import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnswerContent from './AnswerContent'
import SubmitSection from './SubmitSection'
import { questions } from '../data/questions'

const Form = () => {
    const [id, setId] = useState(1);
    const [answers, setAnswer] = useState([]);
    const [isFilled, setIsFilled] = useState(false);
    const [backPressed, setBackPressed] = useState(false);
    //console.log(answers.length)

    const numberQuestions = questions.length;

     useEffect(() => {
        console.log(answers)
    },[id]);
 
    const setData = (data)=>{
     
        setAnswer((prev)=>[...prev, data]);
              
    };

    const previousHandler=()=>{

        setId((prev)=>prev-1)
        setBackPressed(true);

    };

    const nextHandler = () => {

        //isFilled ? setId((prev)=>prev+1) : alert('Please answer the question');
       setId((prev)=>prev+1);

    };


    const handleSubmit=(event)=>{
        event.preventDefault();
        if(answers.length == numberQuestions){
            console.log('Formulario enviado');
            console.log(answers);
        }

    };

    // ¿Está en la primera pregunta?-> Deshabilita previous
    var first; 
    id === 1 ? first = true: first = false;
    

    // ¿Está en la última pregunta?-> Deshabilita next
    var last;
    id == numberQuestions ? last = true: last = false;

    useEffect(() => {
     console.log("backPressed: ", backPressed)
    }, [backPressed]);


   return (
   
    <div>
        <h2>Pregunta {id}/{numberQuestions}</h2>
        <form onSubmit={handleSubmit}>
            <Question id={id}/>
            <AnswerContent id={id} setData = {setData} previousHandler={previousHandler} nextHandler={nextHandler}
            first={first} last={last} setIsFilled={setIsFilled} isFilled={isFilled} answers={answers} backPressed={backPressed} setBackPressed={setBackPressed}/>
            <SubmitSection id={id} numberQuestions = {numberQuestions}/>
        </form>
        
        <br></br>
        

    </div>

  )
}

export default Form