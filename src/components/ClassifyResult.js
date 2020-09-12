import React from 'react'

function ClassifyResult(props){
    console.log(props)
    const BMIValue=((props.weight/(props.height*props.height))*10000).toFixed(1)
    console.log(props.height)
    console.log(props.weight)
    console.log(BMIValue)
    return(
        <>
            <h2>Your BMI is {BMIValue}</h2>
            {BMIValue < 18.5 ? <h2>You are currently underweight</h2> : null }
            {BMIValue >= 18.5 && BMIValue <=24.9 ? <h2>You are currently Healthy</h2> : null }
            {BMIValue >= 25 && BMIValue <= 29.9 ? <h2>You are currently overweight</h2> : null }
            {BMIValue > 30 ? <h2>You are currently Obese</h2> : null }
        </>
    )
}

export default ClassifyResult   