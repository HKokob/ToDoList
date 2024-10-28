
import { useState } from "react";
function Todolist(){
const[tasks, setTask]=useState([]);
const[newTask, setNewTask]=useState("");

function handleInputiveChange(event){ 
  setNewTask(event.target.value);
} 
function AddTask(){ 

  if(newTask.trim()!==""){
    setTask(t => [...t, newTask ]);
    setNewTask(""); 
  }
 
}
//In the code const UpdateTask= tasks.filter((_,i) => i!==index);, 
//the variable i represents the index of the current element in the tasks
// array, while the variable index represents the specific index that is
// being checked for removal.
//So, in this context, the condition i!==index is checking if the index
// of the current element (i) is not equal to the specified index for removal (index). If this condition is true, the current element is included in the new array UpdaateTask; otherwise, it is filtered out.
function DeleteTask(index){
  const UpdaateTask= tasks.filter((_,i) => i!==index); 
  setTask(UpdaateTask); 
}  
// it checks if the given index is greater than 0, 
//which ensures that the task can be moved up without going out of bounds.
//If the condition is met, it creates a copy of the tasks array 
//using the spread operator [...tasks] and assigns it to UpdatedTasks.
// Then it uses array destructuring to swap the elements at the specified 
//index and index-1 in UpdatedTasks. Finally,
// it updates the state of the tasks using the setTask function,
// presumably to re-render the updated list of tasks.
function MoveTaskUp(index){
  
 if(index > 0)
 {
  const UpdatedTasks=[...tasks];
  [UpdatedTasks[index], UpdatedTasks[index-1]]=
  [UpdatedTasks[index-1],UpdatedTasks[index]];
  setTask(UpdatedTasks);
 }

}
function MoveTaskDown(index){
  if(index < tasks.length-1)
  {
   const UpdatedTasks=[...tasks];
   [UpdatedTasks[index], UpdatedTasks[index+1]]=
   [UpdatedTasks[index+1],UpdatedTasks[index]];
   setTask(UpdatedTasks);
  }
}

  return(<div className="To-do-list">
     <h2>To Do List</h2>
     <div>
     <input type="text" placeholder="Enter a task ... " value={newTask} onChange={handleInputiveChange}/>
     <button className="Add-button" onClick={AddTask}>Add</button>
  </div>
  <ol>
    {tasks.map((task,index)=>
            <li key={index}> <span className="text">{task}</span>
              <button className="Delete-button"
             onClick={() => DeleteTask(index)}>
              Delete
              </button>
              <button className="Move-button"
             onClick={() => MoveTaskUp(index)}>
              👆 
              </button>
              <button className="Move-button"
             onClick={() => MoveTaskDown(index)}>
              👇 
              </button>
                    
           </li>
                   )}

  </ol>
  </div>); 
} 
export default Todolist 