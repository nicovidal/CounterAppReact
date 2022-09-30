import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './Counter';
import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value/>
    </React.StrictMode>
)