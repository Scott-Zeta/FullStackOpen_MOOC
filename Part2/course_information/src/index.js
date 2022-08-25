import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const courses = [
    {
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    },
    {
        name: 'Node.js',
        id: 2,
        parts: [
            {
                name: 'Routing',
                exercises: 3,
                id: 1
            },
            {
                name: 'Middlewares',
                exercises: 7,
                id: 2
            }
        ]
    },
    {
        name: 'Containernize',
        id: 3,
        parts: [
            {
                name: 'Terminal',
                exercises: 6,
                id: 1
            },
            {
                name: 'Docker',
                exercises: 10,
                id: 2
            }
        ]
    }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App courses={courses} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

