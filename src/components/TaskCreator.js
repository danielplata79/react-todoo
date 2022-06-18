import { useState } from "react";



const TaskCreator = () => {

    const [ newTaskName, setNewTaskName ] = useState();

    const  handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("Task", newTaskName);
      setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">
          <input
          type="text"
          placeholder="New : Task name"
          onChange={(e) => setNewTaskName(e.target.value)} 
          value={newTaskName}
          />
          <button onClick={ () => alert(newTaskName) }>Save task</button>
        </form>
    )
}

export default TaskCreator;