import React from 'react'
import { TaskProvider } from './contexts/TaskContext'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

export default function App() {
    return (
        <div>
            <TaskProvider>
                <AddTask />
                <TaskList />
            </TaskProvider>
        </div>
    )
}
