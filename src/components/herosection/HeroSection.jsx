import React, { useEffect, useState } from 'react'

import TodoList from './TodoList';
const HeroSection = () => {
  const [todolists,setTodoLists]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const res= await fetch("https://todo-list-app-581e5-default-rtdb.asia-southeast1.firebasedatabase.app/todolist.json");
      const data = await res.json();
      console.log("my dtaa", data)
      const todoData=[];
      for (const key in data){
        todoData.push({
          key:key,
          name:data[key].name,
          details:data[key].details,
          
        })
      }
      setTodoLists(todoData)
    }
    fetchData();

  },[todolists])
  return (
    <div className='hero-section'>
      <table>
        <thead>
          <tr>
            
            <th><p>Name</p></th>
            <th><p>Details</p></th>
            <th><p>Actions</p></th>
          </tr>
        </thead>
      <TodoList todolists={todolists}/>
      </table>
        
      
    </div>
  )
}

export default HeroSection
