import GoalItem from "./GoalItem"

export default function GoalList({goals, onDelete}) {
    return (
<div>
    {goals.map((goal) => (
        <GoalItem key={goal.id} goal={goal} onDelete={onDelete} />
    ))}
</div>
);
}