import * as ReactDOM from 'react-dom/client';
import './assets/index';
import App from './App.jsx';
import React from 'react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);