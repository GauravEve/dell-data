import logo from './logo.svg';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react';

const defaultTasks=[
  {id:1,completed:false,label:'buy milk'},
  {id:2,completed:true,label:'buy bread'},

]

const uniqueId=()=>Math.floor(Math.random()*Date.now())
function App() {
  const [tasks,setTasks]=useState(defaultTasks)


  const completeTaskHandler=(taskId)=>{
    const updateTasks=tasks.map((task)=>{
      const completed =!task.completed;
      return task.id===taskId?{...task,completed}:task;
    });
    setTasks(updateTasks);
  };
  const deleteTaskHandler=(taskId)=>{
    setTasks(tasks.filter(({id})=>taskId!==id));
  };
  const newTaskHandler=(label)=>{
    const newTask={
      id:uniqueId(),
      completed:false,
      label,
    };
    setTasks([...tasks,newTask]);
  }
  return (
    <>
    <div className="container">
      <NewTaskForm newTaskHandler={newTaskHandler}/>
      <TaskList
      tasks={tasks}
      completeTaskHandler={completeTaskHandler}
      deletTaskHandler={deleteTaskHandler}/>
    </div>
    </>
  );
}

export default App;
