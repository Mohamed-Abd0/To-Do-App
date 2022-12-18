
import { useState } from 'react';
import './App.css';
import InputForm from './components/bord/InputForm/InputForm';
import TaskList from './components/bord/Taskslist/TaskList';



const App = ()=>{


  const [Datalist , setDatalist] =useState([]);


  const AddTaskHandler = (EnteredValue)=>{
    setDatalist(prevstat => {
      const updatedTasks = [...prevstat];
      updatedTasks.unshift({ text:EnteredValue, id: Math.floor((Math.random()*10000).toString()) });
      return updatedTasks;
    });
  }

  const deletItemHandler = (itemId)=>{
    setDatalist(prevstat =>{
      const updatedTasks = prevstat.filter(obj => obj.id.toString() !==itemId)
      return updatedTasks;
    })
  }

  let content = <p style={{textAlign : 'center'}}>Enter the first task</p> ;
  if(Datalist.length>0){
    content = <TaskList items={Datalist} ondeletItem={deletItemHandler}></TaskList>
  }


  return (
    <div>
      <section id="goal-form">
        <InputForm onAddTask={AddTaskHandler}></InputForm>
      </section>


      <section id="goals">
      {content}
      </section>
    </div>
  )
};

export default App;