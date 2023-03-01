import React from 'react'

const SubmitSection = (props) => {


    if(props.id == props.numberQuestions){
       return(<input className='enviar' type="submit" value= "Submit" ></input>)
    }

}

export default SubmitSection