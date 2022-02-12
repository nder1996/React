import React from "react";
import prueba from "../prueba.jpg"
import TodoItem from "./TodoItem";
import {Button} from '@mui/material';





function TodoList(){
    return(
        <>
        <h1>hola mundo</h1>
        <img src={prueba} alt="" />
        <TodoItem />
        <Button>Primary</Button>
<Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button>
        </>
    );
}

export default TodoList
