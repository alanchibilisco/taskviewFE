import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Task from './Task';

function App() {
  const urlTask=process.env.REACT_APP_API_TASK;
  const urlPutTask=process.env.REACT_APP_API_PUTTASK;
  const[listTask, setListTask]=useState([]);
  const getListTask=async()=>{
    try {
      const res=await fetch(urlTask);
      const resJson=await res.json();
      console.log(resJson);
      setListTask(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    getListTask();
  },[])
  console.log(urlTask);
  console.log(urlPutTask);
  console.log(listTask);
  return (
    <div className="container my-5">
      <h1 className='fw-bold'>List view</h1>
      <Container className='my-5'>
        <Row>
          {listTask.map((task)=>(
            <Col xs={12} md={4} key={task.id}><Task task={task}></Task></Col>
          ))}       
        </Row>
      </Container>
    </div>
  );
}

export default App;
