import React, { useEffect, useState } from 'react'
import Button from '../button/Button'
import Image from '../../assets/todo.jpg'
import {useDispatch, useSelector} from 'react-redux'
import { todoListActions } from '../../store/StoreSlice'
import { useNavigate } from 'react-router'

const Form = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const existingKey=useSelector(state=>state.todo.key);
  const [userData,setUserData]=useState({
    name:"",
    details:"",
   
  })
  useEffect(()=>{
    const existingTodo=async()=>{
      const res= await fetch(`https://todo-list-app-581e5-default-rtdb.asia-southeast1.firebasedatabase.app/todolist/${existingKey}.json`);
      const existinTodoData= await res.json();
      setUserData({
        name:existinTodoData?.name||"",
        details:existinTodoData?.details||"",
        
      })
    }
    existingTodo();

  },[existingKey])
  const inputHandler=(e)=>{
    const{name,value}=e.target;
    setUserData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    if(existingKey){
      dispatch(todoListActions.updateTodo({
        key:existingKey,
        name:userData.name,
        details:userData.details,
      
      }))
    }
    else
    {
      dispatch(todoListActions.addTodo(userData))
    }
    
   
    setUserData({
      name:"",
      details:"",
     
    })
    navigate("/todo")
  }
  return (
    <form className='form' onSubmit={submitHandler}>
        <div className="add-new-image">
            <img src={Image} alt="" />
        </div>
        <div className="input-text">
            <input type="text" placeholder='Name' name='name' value={userData.name} onChange={inputHandler}/>
          
        </div>
        <div className="input-tel">
            <input type="text" placeholder='More Details' name='details' value={userData.details}  onChange={inputHandler}/>
        </div>
        <Button name="Add"/>
    </form>
  )
}

export default Form
