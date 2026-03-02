export default function GoalItem({ goal, onDelete }) {
  return (
    <div>
      {goal.title}
      <button onClick={() => onDelete(goal.id)}>delete</button>
    </div>
  )
}