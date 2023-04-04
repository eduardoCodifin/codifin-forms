import React,{useState,useEffect} from 'react'
import { questions } from '../data/questions'
import OptionalAnswer from './OptionalAnswer';

const AnswerContent = (props) => {

  const {id, setData, previousHandler, nextHandler, first, last, setIsFilled, answers, isFilled, setBackPressed, backPressed} = props;
  const [ans, setAns] = useState({});
 
  const handleChange=(e)=>{

    if (!backPressed) {
      setAns({
        id: id,
        questions: questions[props.id-1].question,
        answer: e.target.value
      })
      setBackPressed(false);
    }

   

    setIsFilled(true);

  }





  const setSelectedAns =(data)=>{
    setAns(data)
  }

  const showNextQuestion =()=>{

    if (isFilled) {
      setData(ans)
      nextHandler();
      setIsFilled(false);

    }
    else{
      alert("Please answer the question");
    }
 
  };



  

    //Answers logic 
    let answersArray = questions.map(element=> {if(element.id==id) return element.answers} );
    answersArray = answersArray.filter(elem=>elem!==undefined);

    if(answersArray.length == 0){
      return( 
        <div>
          {/*   input enter text  */}
          <input type="text" id={'answer'+id} onChange={handleChange} required/>

          <button onClick={previousHandler}  style={{display: first ? 'none' : 'block'}}>
            Previous
          </button>
          <button onClick={showNextQuestion} style={{display: last? 'none' : 'block'}}>
            Next
          </button>
          
        </div>
      )
      
    }

    else{
      return(
        <div>
          <ul>
          {
              answersArray[0].map((ans, index)=> <OptionalAnswer answer={ans} id={id} key={index} setSelectedAns={setSelectedAns} setIsFilled={setIsFilled} backPressed={backPressed} setBackPressed={setBackPressed}/>) 
          }
          </ul>

          <button onClick={previousHandler} style={{display: first ? 'none' : 'block'}}>
            Previous
          </button>

          <button onClick={showNextQuestion} style={{display: last? 'none' : 'block'}}>
            Next
          </button>

          

        </div>

      )
    }

}

export default AnswerContent