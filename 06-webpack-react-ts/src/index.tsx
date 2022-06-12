import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

const greet = (name: string) => `hello ${name}`;

const root = createRoot(document.getElementById("root")!);

const onClickTitle = (e: any) => {
    console.log('clicked at ', new Date().getTime(), e);
};

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);