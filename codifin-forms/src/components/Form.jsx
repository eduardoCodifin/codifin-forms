import React, { useEffect, useState } from 'react'
import Question from './Question'
import AnswerContent from './AnswerContent'

const Form = () => {
    const [id, setId] = useState(1);

    useEffect(()=>{
       
    },[id]);
 
    const previousHandler=()=>{
        setId((prev)=>prev-1)
    };
    const nextHandler=()=>{
        setId((prev)=>prev+1)
    };

   return (
   
    <div>
        <form>
            <Question id={id}/>
            <AnswerContent id={id}/>
        </form>
        <button onClick={previousHandler}>Previous</button>
        <button onClick={nextHandler}>Next</button>
    </div>

  )
}

export default Form