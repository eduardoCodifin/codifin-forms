import React from 'react'
import { questions } from '../data/questions'

const Question = (props) => {
  return (
    <h3 className='pregunta'> {questions.map(element=> {if(element.id==props.id) return element.question} )} </h3>
  )
}

export default Question
