import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Task from "./Task";
import ViewTask from "./ViewTask";
//import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

function App() {
  const urlTask = process.env.REACT_APP_API_TASK;
  const urlPutTask = process.env.REACT_APP_API_PUTTASK;
  const [listTask, setListTask] = useState([]);
  const [show, setShow] = useState(false);
  const [task, setTask]=useState({});
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getListTask = async () => {
    try {
      const res = await fetch(urlTask);
      const resJson = await res.json();
      console.log(resJson);
      setListTask(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getListTask();
  }, []);
  // console.log(urlTask);
  // console.log(urlPutTask);
  // console.log(listTask);
  console.log(task);
  return (
    <div className="container my-5">
      <h1 className="fw-bold">List view</h1>
      <Container className="my-5">
        <Row>
          {listTask.map((task) => (
            <Col xs={12} md={4} key={task._id}>
              <Task task={task} handleShow={handleShow} setTask={setTask}></Task>
            </Col>
          ))}
        </Row>
      </Container>
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TASK: {task.UUID}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Title: {task.title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    </div>
  );
}

export default App;
