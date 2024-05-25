import React from 'react'
import { FaUserLarge } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { todoListActions } from '../../store/StoreSlice';
import { useNavigate } from 'react-router';

const TodoList = ({todolists}) => {
  const navigate= useNavigate();
    const dispatch=useDispatch();

    const deleteHandler=(key)=>{
     
        dispatch(todoListActions.deleteTodo(key));
        
    }
    const updateHandler=(key)=>{
        dispatch(todoListActions.updateTodoKey(key))
        navigate("/")

    }
  return (
    <tbody>
   {
    todolists.map((data)=>{
        return (
            <tr key={data.key}>
           
            <td><h2>{data.name}</h2></td>
        
            <td><h2>{data.details}</h2></td> 
            <td>
              <div>
                <span onClick={()=>{updateHandler(data.key)}}><FaEdit /></span>
                <span onClick={()=>{deleteHandler(data.key)}}><MdDelete /></span>
               
              </div>
            </td>
          </tr>
        )
    })
   }
  </tbody>
  )
}

export default TodoList
