// TaskContext.js
import React, { createContext, useReducer } from 'react';

export const TaskContext = createContext();

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, { id: Date.now(), text: action.payload, completed: false }];
        case 'TOGGLE_TASK':
            return state.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            );
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'CLEAR_TASKS':
            return [];
        case 'TOGGLE_ALL_TASKS':
            const areAllCompleted = state.every(task => task.completed);
            return state.map(task => ({ ...task, completed: !areAllCompleted }));

        default:
            return state;
    }
};

export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Redux', completed: false },
        { id: 3, text: 'Learn React-Redux', completed: false },
        { id: 4, text: 'Learn React-Router', completed: false },

    ]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
};
