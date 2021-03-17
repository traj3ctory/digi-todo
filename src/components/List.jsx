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

  // HANLDE CHECKBOX
  const handleCheck = (e, data) => {
    if (e.target.checked) {
      completeTask({ ...data, completed: true });
    } else {
      completeTask({ ...data, completed: false });
    }
  };


  let count = 1;
  const taskList = tasks.length ? (
    tasks.map((task, id) => {
      return (
        
        <ListGroup.Item key={task.id} className={`${task.completed ? 'completed' : 'pending'} btn-action`}>
          <Form.Check checked={task.completed} aria-label="Todo App" inline type="checkbox" id={`${task.id}`} onChange={(e) => handleCheck(e, task)} />
          {count++} : {task.taskName}{" "}
          <span className="float-right">
            <button className="ripple btn btn-primary btn-sm btn-edit pr-1 pt-0 pb-1" onClick={() => { setModalShow(true); setEdit(task); }} >
              <FaRegEdit />
            </button>&ensp;<button className="ripple btn btn-danger btn-sm px-1 pt-0 pb-1" onClick={(e) => { deleteTask(task.id) }}>
              <FaRegTrashAlt />
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
      <p className="mb-0">You have no <strong>task</strong> left!</p>
    </Alert>
  );

  return (
    <>
      {/* DISPLAY TASK LIST */}
      <ListGroup variant="flush">{taskList}</ListGroup>
      {/* EDIT MODAL */}
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