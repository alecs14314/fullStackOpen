import { Static } from './Static'

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100
  console.log('render stadistics')
  return (
    (
      <table>
        <tbody>
          <Static text='Good' value={good} />
          <Static text='Neutal' value={neutral} />
          <Static text='Bad' value={bad} />
          <Static text='All Comments: ' value={total} />
          <Static text='Average: ' value={average} />
          <Static text='Positive: ' value={positive} />
        </tbody>
      </table>
    )
  )
}
