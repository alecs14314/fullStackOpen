import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { ButtonStatic } from './components/ButtonStatic'
import { Statistics } from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const setGoodFedBack = () => {
    return setGood(good + 1)
  }
  const setNeutralFedBack = () => {
    return setNeutral(neutral + 1)
  }
  const setBadFedBack = () => {
    return setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <ButtonStatic onClick={setGoodFedBack} text='Good' />
      <ButtonStatic onClick={setNeutralFedBack} text='Neutral' />
      <ButtonStatic onClick={setBadFedBack} text='Bad' />
      <h2>Statics</h2>
      {(good > 0 || neutral > 0 || bad > 0) && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  )
}

export default App
