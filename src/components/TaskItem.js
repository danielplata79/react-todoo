import { useState } from "react";

const TaskItem = () => {

 
    const [ taskItems, setTaskItems ] = useState([
        {name: "first task, done: false"},
        {name: "second task, done: false"},
        {name: "third task, done: false"},
    ]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Tasks</th>
                </tr>
            </thead>
            <tbody>
                {
                    taskItems.map(task => (
                        <tr>
                            {task.name}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default TaskItem;