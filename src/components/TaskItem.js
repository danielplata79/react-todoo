import { useState } from "react";

const TaskItem = () => {

    const [ taskItems ] = useState([
        {name: "first task", description: "description 1", done: false},
        {name: "second task",description: "description 2", done: false},
        {name: "third task", description: "description 3", done: false},
    ]);

    return (



        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                           Tasks 
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Task Description
                        </th>


                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskItems.map(task => (
                         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                             <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">                        
                                {task.name}
                             </th>
                             <td class="px-6 py-4">
                                {task.description}
                             </td>
                             <td class="px-6 py-4 text-right">
                                 <a href="google.com" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Done</a>
                             </td>
                         </tr>
                        ))
                    }   
                </tbody>
            </table>
        </div>
    )
}

export default TaskItem;