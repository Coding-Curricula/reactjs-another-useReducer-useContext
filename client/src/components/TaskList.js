// TaskList.js
import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);

    return (
        <div>
            <ul>
                {tasks.map(task => (
                    <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        {task.text}
                        <button onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
