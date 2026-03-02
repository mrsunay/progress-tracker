import {useState} from 'react';

export default function GoalForm({ onCreate }) {
  const [newTitle, setTitle] = useState("");

  const handleSubmit = () => {
    if (!newTitle.trim()) return
    onCreate(newTitle)
    setNewTitle("")
  }

    return (
      <div>
        <input
          value={newTitle}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new goal"
        />
        <button onClick={handleSubmit}>Create Goal</button>
      </div>
    );
  };
