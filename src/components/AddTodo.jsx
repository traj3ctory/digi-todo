import { Component } from 'react';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaTasks } from 'react-icons/fa';

/**
* @author traj3ctory
* @class AddTask
**/

class AddTask extends Component {
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
        this.props.addTask(this.state);
        this.setState({
            taskName: ''
        })
    }
    render() {
        const {handleSubmit, handleChange } = this;
        return (
            <>
                <Form onSubmit={handleSubmit}>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="todoIcon"><FaTasks /></InputGroup.Text>
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
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </Form>
            </>
        )
    }
}


export default AddTask;