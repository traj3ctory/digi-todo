import { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Swal from 'sweetalert2'

import Layout from '../components/Layout';
import List from '../components/List';
import Add from '../components/Add';
import Counter from '../components/Counter';

/**
* @author traj3ctory
* @class Home
**/

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
                { id: 145, taskName: 'Create a task', completed: false },
                { id: 223, taskName: 'Edit a task', completed: true },
                { id: 345, taskName: 'Delete a task', completed: true },
            ]
        };
    }

    // ADD TODO
    addTask = (task) => {
        task.id = Math.floor(Math.random() * 1000);
        task.completed = false;

        let tasks = [...this.state.tasks, task]
        this.setState({
            tasks
        })
        Swal.fire({
            icon: 'success',
            title: 'Task Added!',
            showConfirmButton: false,
            timer: 1500
        })
    }

    // DELETE TODO
    deleteTask = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                let tasks = this.state.tasks.filter(task => {
                    return task.id !== id
                });
                this.setState({
                    tasks
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // UPDATE TODO
    updateTask = (data) => {
        if (!data || /^\s*$/.test(data.text)) {
            return;
        }

        this.state.tasks.forEach(task => {
            if (task.id === data.id) {
                task.taskName = data.taskName;
                Swal.fire({
                    icon: 'success',
                    title: 'Task Name Updated',
                    showConfirmButton: false,
                    timer: 1500
                })
                return task;
            }
        });
    };

    // SET COMPLETE
    completeTask = data => {
        const { tasks } = this.state;
        this.setState({
            tasks: tasks.map(task => {
                if (task.id === data.id)
                    return {
                        ...task,
                        completed: !task.completed
                    };

                if (data.completed) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Task Completed',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return task;
            })
        });
    };

    render() {
        const { addTask, deleteTask, completeTask, updateTask } = this;
        return (
            <>
                <Layout>
                    <Row>
                        <Col md="8" sm="12">
                            <Card className="list">
                                <Card.Header>TASK LIST</Card.Header>
                                <Card.Body>
                                    <List
                                        completeTask={completeTask}
                                        deleteTask={deleteTask}
                                        updateTask={updateTask}
                                        tasks={this.state.tasks}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md="4" sm="12">
                            <div className="sticky">
                                <Add addTask={addTask} />
                                <Counter total={this.state.tasks.length} completed={this.state.tasks.filter(task => task.completed).length} />
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </>
        )
    }
}

export default Home;