import {useState} from "react"



export default function GoalItem({ goal, onDelete, onEdit, onToggleCompleted }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(goal.title)
  

  if (isEditing) {
    return (
      <div>
        <input
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button
          onClick={() => {
            onEdit(goal.id, editTitle)
            setIsEditing(false)
          }}
        >
          Save
        </button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    )
  }

  return (
    <div style={goal.completed ? { textDecoration: "line-through" } : {}}>
      {goal.title}
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onToggleCompleted(goal.id, !goal.completed)}>
        {goal.completed ? "Mark Incomplete" : "Mark Completed"}
      </button>
      <button onClick={() => onDelete(goal.id)}>Delete</button>
    </div>
  )
}