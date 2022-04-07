
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Task = ({ task, handleShow, setTask }) => {  
 const newTask=()=>{
     setTask({
         UUID: task.UUID,
         title: task.title
     })
 };
  return ( 
    <div className="border rounded bg-primary container py-2">
      <Button onClick={()=>{
          handleShow();
          newTask();
      }}><h4 className="my-2 text-dark">Task UUID:{task.UUID}</h4></Button>      
      <p className="text-break">Title:{task.title}</p>        
    </div>    
  );
};

export default Task;
