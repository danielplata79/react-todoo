import { useState } from "react";

const TaskCreator = () => {

    const [ newTaskName, setNewTaskName ] = useState();
    const [ newTaskDescription, setNewDescription ] = useState();

    const handleSubmit = (e) => {
      e.preventDefault();

      // Saves to local Storage
      localStorage.setItem("Task", newTaskName);
      localStorage.setItem("Decription", newTaskDescription);

      // Clear input data
      setNewTaskName('');
      setNewDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
          <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-300">New Task</label>
          <input
          type="text"
          placeholder="New : Task name"
          onChange={(e) => setNewTaskName(e.target.value)} 
          value={newTaskName}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <br></br>
          <label class="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Task Description</label>
          <textarea onChange={(e) => setNewDescription(e.target.value) } value={newTaskDescription} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a description..."></textarea>
          <br></br>
          <button onClick={ () => alert("Tarea: " + newTaskName + "Descripcion: " + newTaskDescription) } class="bg-emerald-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save task</button>
        </form>
    )
}

export default TaskCreator;