import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaTasks } from 'react-icons/fa';

const Edit = (props) => {

    const [newValue, setNewValue] = useState({})

    const inputRef = useRef(null);

    const handleChange = (e) => {
        let taskId = Math.floor(Math.random() * 1000)
        setNewValue({ id: taskId, taskName: e.target.value, status: false });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.updateTask(
            newValue
        );
        props.onHide();
    };

    useEffect(() => {
        setNewValue({ id: props.data.id, taskName: props.data.taskName, status: props.data.status });
    }, [props]);


    return (
        <>
            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="editTodo" onSubmit={handleSubmit}>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="todoIcon" className="text-info"><FaTasks /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Edit task"
                                aria-label="todo"
                                aria-describedby="todoIcon"
                                value={newValue.taskName}
                                type="text"
                                id={props.data.id}
                                onChange={handleChange}
                                spellCheck="true"
                                ref={inputRef}
                            />
                        </InputGroup>
                        <button className="btn btn-sm btn-primary float-right" type="submit">
                            Update
                        </button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Edit;
