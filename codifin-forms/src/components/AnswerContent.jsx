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
  const setSelectedAns =(data)=>{
    setAns(data)
  }

  const allFunctionsNext =()=>{
    props.setData(ans)
    props.nextHandler();
    
  };

    //Answers logic 
    let answersArray = questions.map(element=> {if(element.id==props.id) return element.answers} );
    answersArray = answersArray.filter(elem=>elem!==undefined);

    if(answersArray.length == 0){
      return( 
        <div>
          <input type ="text" id={'answer'+props.id} onChange={handleChange} required/>
          <input onClick={props.previousHandler}  style={{display: props.first ? 'none' : 'block'}} type='submit' value="Previous"></input>
          <input onClick={allFunctionsNext} style={{display: props.last? 'none' : 'block'}} type='submit' value="Next"></input>
        </div>
      )
      
    }

    else{
      return(
        <div>
          <ul>
          {
              answersArray[0].map((ans, index)=> <OptionalAnswer answer={ans} id={props.id} key={index} setSelectedAns={setSelectedAns}/>) 
          }
          </ul>
          <input onClick={props.previousHandler} style={{display: props.first ? 'none' : 'block'}} type='submit' value="Previous"></input>
          <input onClick={allFunctionsNext} style={{display: props.last? 'none' : 'block'}} type='submit' value="Next"></input>
          

        </div>

      )
    }

}

export default AnswerContent