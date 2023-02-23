import React,{useState,useEffect} from 'react'
import { questions } from '../data/questions'
import OptionalAnswer from './OptionalAnswer';

const AnswerContent = (props) => {

  const [ans, setAns] = useState({});
 
  const handleChange=(e)=>{
    setAns({
      id: props.id,
      questions: questions[props.id-1].question,
      answer: e.target.value
    })
  }

    //Answers logic 
    let answersArray = questions.map(element=> {if(element.id==props.id) return element.answers} );
    answersArray = answersArray.filter(elem=>elem!==undefined);

    if(answersArray.length ==0){
      return <input type ="text" id={'answer'+props.id} onChange={handleChange} required/>
    }

    else{
      return(
        <ul>
        {
            answersArray[0].map((ans, index)=> <OptionalAnswer answer={ans} id={props.id} key={index} />) 
      
        }
        </ul>
      )
    }

}

export default AnswerContent