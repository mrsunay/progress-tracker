import GoalItem from "./GoalItem"

export default function GoalList({goals, onDelete, onEdit, onToggleCompleted}) {
    return (
<div>
    {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} onEdit={onEdit} onToggleCompleted={onToggleCompleted} />
    ))}
</div>
);
}