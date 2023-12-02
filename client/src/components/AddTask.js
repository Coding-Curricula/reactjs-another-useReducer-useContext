import React, { useState, useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

export default function AddTask() {
    const [text, setText] = useState('')
    const { dispatch } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!text) return
        dispatch({ type: 'ADD_TASK', payload: text })
        setText('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a task"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Add" />
            </form>
            <button onClick={() => dispatch({ type: 'CLEAR_TASKS' })}>Clear All</button>
            <button onClick={() => dispatch({ type: 'TOGGLE_ALL' })}>Toggle All</button>

        </div>
    )
}
