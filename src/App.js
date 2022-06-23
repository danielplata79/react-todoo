import './App.css';
import TaskCreator from './components/TaskCreator';
import TaskItem from './components/TaskItem';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const styles = {
  container: `container mx-auto bg-emerald-100 p-10 h-50 shadow-md rounded`,
  containerTable: `container mx-auto bg-emerald-100 p-10 h-50 shadow-md rounded h-96`,
  footer: `fixed bottom-0 w-full`
}

function App() {

  // function createNewTask() {
  //   alert('creating')
  // }

  return (
    <div className='App'>
       <Navbar></Navbar>
       <br></br>

       <div className=''>
           <div className={styles.container}>
              <TaskCreator ></TaskCreator>
           </div>
           <br></br>

           <div className={styles.containerTable}>
               <TaskItem></TaskItem>         
           </div>
           <br></br>
      </div>

     <div className={styles.footer}>
        <Footer></Footer>       
     </div>

    </div>

    
   );
}

export default App;