import React from 'react'
import { questions } from '../data/questions'

const Question = (props) => {
  
  const {id} = props;

  return (
    <div>
        <h3> {questions.map(element=> {if(element.id==id) return element.question} )} </h3>
    </div>
  )
}

export default Question
