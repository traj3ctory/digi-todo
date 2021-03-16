import { useState, useEffect, useRef } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import { FaTasks } from 'react-icons/fa';

const Edit = (props) => {

    // REACT HOOKS FOR STATE MANAGEMENT
    const [newValue, setNewValue] = useState(null)

    // ACCESS DOM ELEMENT
    const inputRef = useRef(null);

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setNewValue({ id: props.data.id, taskName: e.target.value, completed: props.data.completed });
    };

    // SUBMIT THE UPDATED DATA
    const handleSubmit = e => {
        e.preventDefault();
        props.updateTask(
            newValue
        );
        props.onHide();
    };

    // POPULATE THE MODAL-EDIT STATE
    useEffect(() => {
        setNewValue(props.data);
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
                   { newValue &&  <Form id="editTodo" onSubmit={handleSubmit}>
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
                        <button className="ripple btn btn-sm btn-primary float-right" type="submit">
                            Update
                        </button>
                    </Form>}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Edit;
