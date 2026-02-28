import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [goals, setGoals] = useState([])
  const [newTitle, setNewTitle] = useState("")

      const fetchGoals = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/goals/")
        console.log("API response:", response.data)
        setGoals(response.data || [])
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }


  useEffect(() => {
    fetchGoals()
  }, [])
  
  const createGoal = async () => {
    if (!newTitle.trim()) return

    await axios.post("http://127.0.0.1:8000/api/goals/", {
      title: newTitle
    })
    setNewTitle("")
    fetchGoals()
  }


  return (
    <>
      <h1>Learning Goals</h1>
      {goals.map(goal => (
        <div key={goal.id}>{goal.title}</div>
      ))}
      <input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder="Enter new goal"></input>
    <button onClick={createGoal}>Create Goal</button>
    </>
    
  )
}

export default App
