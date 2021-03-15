import { Component } from 'react';
import Layout from '../components/Layout';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

/**
* @author traj3ctory
* @class Home
**/

class Home extends Component {
    state = {
        tasks: [
            { id: 1, taskName: 'Create a task' },
            { id: 2, taskName: 'Edit a task' },
            { id: 3, taskName: 'Delete a task', },
        ]
    }

    addTask = (task) => {
        // task.id = Math.floor(Math.random() * 100)
        let count = 4;
        task.id = count++;
        let tasks = [...this.state.tasks, task]
        this.setState({
            tasks
        })
    }

    deleteTask = (id) => {
        let tasks = this.state.tasks.filter(task => {
            return task.id !== id
        });
        this.setState({
            tasks
        })
    }

    editTask = () => {

    }

    //     componentDidMount() {
    //         console.log('component mounted')
    //     }
    //     componentDidUpdate(prevProps, prevState) {
    //         console.log('component updated');
    //         console.log(prevProps, prevState);
    //     }

    render() {
        const {addTask, deleteTask} = this;
        return (
            <>
                <Layout>
                    <TodoList deleteTask={deleteTask} tasks={this.state.tasks} />
                    <AddTodo addTask={addTask} />
                </Layout>
            </>
        )
    }
}

export default Home;