import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskItem from './components/TaskItem';

function App() {
  return (
    <div className='App'>
        <div className='home'>
          <h1>React - Task List Application</h1>
          <hr></hr>
          <h3>Simple React To-do Aplication</h3>
        </div>
      
        <div className='task-manager'>
          <TaskCreator></TaskCreator>
          <br></br>
          <TaskItem></TaskItem>
        </div>
    </div>
   );
}

export default App;