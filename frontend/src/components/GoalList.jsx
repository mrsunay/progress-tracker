import GoalItem from "./GoalItem"

export default function GoalList({goals, onDelete, onEdit}) {
    return (
<div>
    {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} onEdit={onEdit} />
    ))}
</div>
);
}