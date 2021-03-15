import ListGroup from 'react-bootstrap/ListGroup';
import { FaRegTrashAlt } from 'react-icons/fa';

/**
* @author traj3ctory
* @function TodoList
**/

const TodoList = ({ tasks, deleteTask }) => {

  const taskList = tasks.map(task => {
    return (
      <>
        <ListGroup variant="flush">
          <ListGroup.Item key={task.id}>
            <p>{task.id} : {task.taskName} <span className="float-right"><button className="btn btn-danger btn-sm" onClick={(e) => { deleteTask(task.id) }}><FaRegTrashAlt /></button></span></p>

          </ListGroup.Item>
        </ListGroup>
      </>
    )

  })
  return (
    <>
      {taskList}
    </>
  )
}


export default TodoList