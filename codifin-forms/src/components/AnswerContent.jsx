import React from 'react'
import { questions } from '../data/questions'
import OptionalAnswer from './OptionalAnswer';

const AnswerContent = (props) => {

    //Answers logic 
    let answersArray = questions.map(element=> {if(element.id==props.id) return element.answers} );
    answersArray = answersArray.filter(elem=>elem!==undefined);
    if(answersArray.length ==0){
      return <input type ="text" id={'answer'+props.id}/>
    }

    else{
      return(
        <ul>
        {
            answersArray[0].map(ans=> <OptionalAnswer answer={ans} id={'answer'+props.id}/>) 
        }
        </ul>
      )
    }

}

export default AnswerContent