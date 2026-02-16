import { useEffect, useState } from "react"
import axios from "axios"

function App() {
  const [goals, setGoals] = useState([])

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/goals/")
        console.log("API response:", response.data)
        setGoals(response.data || [])
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchGoals()
  }, [])

  return (
    <div>
      <h1>Learning Goals</h1>
      {goals.map(goal => (
        <div key={goal.id}>{goal.title}</div>
      ))}
    </div>
  )
}

export default App
