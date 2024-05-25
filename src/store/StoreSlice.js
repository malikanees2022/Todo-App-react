import {createSlice} from '@reduxjs/toolkit';


const initialState={
    key:"",
    todo:{
        name:"",
        details:"",
      
    },
  

}
const StoreSlice = createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addTodo :(state,action)=>{
                const userData=action.payload
                fetch("https://todo-list-app-581e5-default-rtdb.asia-southeast1.firebasedatabase.app/todolist.json",{
                    method:"POST",
                    headers:{
                       "COntent-Type":"application/json"
                    },
                    body:JSON.stringify(userData)
                    
                }).catch(error=>{
                    console.log(error,"error is happens")
                })
        },
        deleteTodo:(state,action)=>{
            const deleteKey=action.payload;
            fetch(`https://todo-list-app-581e5-default-rtdb.asia-southeast1.firebasedatabase.app/todolist/${deleteKey}.json`,{
                method:"DELETE"
            }).catch(error=>{
                console.log(error,"deleting erororor")
            })


        },
        updateTodoKey:(state,action)=>{
            state.key=action.payload;
        },
        updateTodo:(state,action)=>{
            const{key,name,details}=action.payload;
            fetch(`https://todo-list-app-581e5-default-rtdb.asia-southeast1.firebasedatabase.app/todolist/${key}.json`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,details})
            }).catch(error=>{
                console.log(error)
            })
            state.key="";
        },
       
    }
})

export const todoListActions= StoreSlice.actions;
export default StoreSlice;