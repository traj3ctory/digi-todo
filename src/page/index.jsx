import { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Swal from 'sweetalert2'

import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import AddTodo from '../components/Add';
import Counter from '../components/Counter';

/**
* @author traj3ctory
* @class Home
**/

class Home extends Component {
    state = {
        tasks: [
            { id: 145, taskName: 'Create a task', status: 'pending' },
            { id: 223, taskName: 'Edit a task', status: 'completed' },
            { id: 345, taskName: 'Delete a task', status: 'completed' },
        ],
        total: 0,
        completed: 0,
    }

    // ADD TODO
    addTask = (task) => {
        task.id = Math.floor(Math.random() * 1000)

        let tasks = [...this.state.tasks, task]
        let total = tasks.length;
        this.setState({
            tasks,
            total

        })
        Swal.fire({
            icon: 'success',
            title: 'Task Added',
            showConfirmButton: false,
            timer: 2000
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
                let total = tasks.length;
                this.setState({
                    tasks,
                    total
                })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // SET COMPLETE
    completeTask = (data) => {
        console.log(data);
        let tasks = [...this.state.tasks]
        let count = 1;

        tasks.forEach(task => {
            if (task.status === 'completed') {
                let oldTask = tasks.filter(task => task.id !== data.id);
                const newTask = { ...tasks[oldTask], ...data }
                tasks.splice(oldTask, 1, newTask)

                this.setState({
                    tasks,
                    completed: count++,
                })
            } else {
                let oldTask = tasks.filter(task => task.id !== data.id);
                const newTask = { ...tasks[oldTask], ...data }
                tasks.splice(oldTask, 1, newTask)
                // console.log(tasks);
            }
        });

    }

    // UPDATE
    updateTask = (data) => {
        if (!data || /^\s*$/.test(data.text)) {
            return;
        }

        this.setState(item => {
            let tasks = [...this.state.tasks];
            const oldTaskIndex = tasks.filter(task => task.id !== data.id);
            const newTask = { ...tasks[oldTaskIndex], ...data }
            tasks.splice(oldTaskIndex, 1, newTask)

            return { tasks: tasks }
        })
    };

    componentDidMount() {
        let total = this.state.tasks.length;
        this.setState({
            total
        })
    }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('component updated');
    //     console.log(prevProps, prevState);
    // }

    render() {
        const { addTask, deleteTask, completeTask, updateTask } = this;
        return (
            <>
                <Layout>
                    <Row>
                        <Col lg="9" md="8" sm="12">
                            <Card className="list">
                                <Card.Header>Todo</Card.Header>
                                <Card.Body>
                                    <TodoList
                                        completeTask={completeTask}
                                        deleteTask={deleteTask}
                                        updateTask={updateTask}
                                        tasks={this.state.tasks}
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg="3" md="4" sm="12">
                            <div className="sticky">
                                <AddTodo addTask={addTask} />
                                <Counter total={this.state.total} completed={this.state.completed} />
                            </div>
                        </Col>
                    </Row>
                </Layout>
            </>
        )
    }
}

export default Home;