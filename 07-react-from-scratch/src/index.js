import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Todo from './App';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Todo />
    </StrictMode>
);