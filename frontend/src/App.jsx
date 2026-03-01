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
  const createGoal = async () => {
    if (!newTitle.trim()) return
  try {
   const response = await axios.post("http://127.0.0.1:8000/api/goals/", {title: newTitle })
  setGoals(prev => [...prev, response.data])
    setNewTitle("")}
    
   catch (error)
{
  console.error("Create error:", error)
}
  }

  const deleteGoal = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/goals/${id}/`)
      setGoals(prev => prev.filter(goal => goal.id !== id))
    } catch (error) {
      console.error("Delete error:", error)
    }
  }

  useEffect(() => {
    fetchGoals()
  }, [])
  

  return (
    <>
      <h1>Learning Goals</h1>
      {goals.map(goal => (
        <div key={goal.id}>{goal.title}<button onClick={() => deleteGoal(goal.id)}>delete</button></div>
        
      ))}
      <input value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder="Enter new goal"></input>
    <button onClick={createGoal}>Create Goal</button>
    </>
    
  )
}

export default App
