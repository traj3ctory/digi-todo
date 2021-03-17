import { Component } from 'react';

import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import { MdAssignment, MdCreateNewFolder } from 'react-icons/md';

/**
* @author traj3ctory
* @class Add
**/

class Add extends Component {
    state = {
        taskName: '',
    }

    // fUNCTION TO HANDLE INPUT CHANGE
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // FUNCTION TO ADD TASK
    handleSubmit = (e) => {
        e.preventDefault();
        const addTodo = document.querySelector('#task').value;

        if (addTodo !== "" && addTodo.length < 20) {
            this.props.addTask(this.state);
            this.setState({
                taskName: ''
            })
        } else if (addTodo.length >= 20) {
            Swal.fire('Oops...', 'Task must be less than 20 characters!', 'warning')
        } 
        else {
            Swal.fire('Oops...', 'Input field cannot be empty!', 'info')
        }
    }

    render() {
        const { handleSubmit, handleChange, props } = this;
        return (
            <>
                <Card className={`add-task ${props.mobile ? 'd-block' : ''}`}>
                    <Card.Header>Add Task</Card.Header>
                    <Card.Body>
                        <Form id="addTodo" onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="todoIcon" className="text-info"><MdAssignment /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    placeholder="Add a task"
                                    aria-label="todo"
                                    aria-describedby="todoIcon"
                                    value={this.state.taskName}
                                    type="text"
                                    id="task"
                                    name="taskName"
                                    onChange={handleChange}
                                    spellCheck="true"
                                    // maxLength="20"
                                />
                            </InputGroup>
                            <button className="ripple btn btn-sm btn-primary text-center w-100" type="submit">
                                <MdCreateNewFolder />&ensp;Submit
                            </button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        )
    }
}


export default Add;