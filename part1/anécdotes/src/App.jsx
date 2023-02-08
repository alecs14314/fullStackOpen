import { useState } from 'react'
import './App.css'

function App ({ anecdotes }) {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(9).fill(0))

  const handledNextAnecdote = () => {
    let newAnecdote = selected
    do {
      newAnecdote = Math.floor(Math.random() * 6)
    }
    while (newAnecdote === selected)
    setSelected(newAnecdote)
  }

  const handledVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
  }
  const getAnecdoteMostVoted = () => {
    const anecdoteWin = points.indexOf(Math.max(...points))
    const pointAnecdoteWin = Math.max(...points)
    return pointAnecdoteWin > 0 ? anecdoteWin : -1
  }
  return (
    <div className='App'>
      <h2>{anecdotes[selected]}</h2>
      <h3>Votes: {points[selected]}</h3>
      <button onClick={handledNextAnecdote}>Next anecdote</button>
      <button onClick={handledVote}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <h3>{anecdotes[getAnecdoteMostVoted()]}</h3>
    </div>
  )
}

export default App
