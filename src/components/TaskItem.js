import { useState } from "react";

const TaskItem = () => {

    const [ taskItems ] = useState([
        {name: "first task, done: false"},
        {name: "second task, done: false"},
        {name: "third task, done: false"},
    ]);

    return (
        <div className="relative overflow-x-auto">
            <table className="table-autow-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="px-6 py-3">Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskItems.map(task => (
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {task.name}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TaskItem;