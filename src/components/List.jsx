import { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { FaRegTrashAlt, FaUserAstronaut, FaRegEdit } from "react-icons/fa";

import Edit from "./Edit";

/**
 * @author traj3ctory
 * @function List
 **/

const List = ({ tasks, deleteTask, completeTask, updateTask }) => {
  const [modalShow, setModalShow] = useState(false);
  const [edit, setEdit] = useState("");
  const [newValue, setNewValue] = useState({});

  const handleCheck = (e, data) => {

    // More Work
    if (e.target.checked) {
      let taskId = Math.floor(Math.random() * 1000)
      setNewValue({ id: taskId, taskName: data.taskName, completed: true });
      completeTask(newValue);
    } else {
      let taskId = Math.floor(Math.random() * 1000)
      setNewValue({ id: taskId, taskName: data.taskName, completed: false });
      completeTask(newValue);
    }
  };


  let count = 1;
  const taskList = tasks.length ? (
    tasks.map((task, id) => {
      return (
        <ListGroup.Item key={task.id}>
          <Form.Check checked={task.completed} aria-label="Todo App" inline type="checkbox" id={`${task.id}`} onChange={(e) => handleCheck(e, task)} />
          {count++} : {task.taskName}{" "}
          <span className="float-right">
            <button className="btn btn-danger btn-sm" onClick={(e) => { deleteTask(task.id) }}>
              <FaRegTrashAlt />
            </button>
            &nbsp;
            <button className="btn btn-primary btn-sm" onClick={() => { setModalShow(true); setEdit(task); }} >
              <FaRegEdit />
            </button>
          </span>
        </ListGroup.Item>
      );
    })
  ) : (
    <Alert variant="info">
      <Alert.Heading>
        Hello! <FaUserAstronaut />,{" "}
      </Alert.Heading>
      <hr />
      <p className="mb-0">You have no todo left!</p>
    </Alert>
  );

  return (
    <>
      <ListGroup variant="flush">{taskList}</ListGroup>

      <Edit
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={edit}
        updateTask={updateTask}
      />
    </>
  );
};

export default List;
