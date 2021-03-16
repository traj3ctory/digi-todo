import { Component } from 'react';

import Swal from 'sweetalert2'

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';

import { FaTasks } from 'react-icons/fa';

/**
* @author traj3ctory
* @class Add
**/

class Add extends Component {
    state = {
        taskName: '',
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const addTodo = document.querySelector('#task').value;

        if (addTodo !== "") {
            this.props.addTask(this.state);
            this.setState({
                taskName: ''
            })
        } else {
            Swal.fire('Oops...', 'Input field cannot be empty!', 'info')
        }
    }
    render() {
        const { handleSubmit, handleChange } = this;
        return (
            <>
                <Card className="add-task">
                    <Card.Header>Add Task</Card.Header>
                    <Card.Body>
                        <Form id="addTodo" onSubmit={handleSubmit}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="todoIcon" className="text-info"><FaTasks /></InputGroup.Text>
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
                                                                    />
                            </InputGroup>
                            <button className="btn btn-sm btn-primary float-right" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        )
    }
}


export default Add;