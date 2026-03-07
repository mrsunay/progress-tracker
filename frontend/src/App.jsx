import { useEffect, useState } from "react"
import axios from "axios"
import GoalList from "./components/GoalList"
import GoalForm from "./components/GoalForm"

function App() {
  const [goals, setGoals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  

      const fetchGoals = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/goals/")
        console.log("API response:", response.data)
        setGoals(response.data || [])
      } catch (error) {
        console.error("Fetch error:", error)
        setError(error)
      } finally {
        setLoading(false)
      }
    }
      const createGoal = async (title) => {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/goals/",
           { title }
  )

            setGoals([...goals, response.data])
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
  

  if (loading){
      return <p>Loading...</p>
        }
  if (error) {
          return <p>Error: {error.message}</p>
        }

  return (
    <>
      <h1>Learning Goals</h1>
      <GoalForm onCreate={createGoal} />
      <GoalList goals={goals} onDelete={deleteGoal} />
      
    </>
  )
}

export default App
