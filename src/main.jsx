import React from "react";
import ReactDOM from "react";
import {createRoot} from 'react-dom/client'

import App from "./App.jsx";

const root = createRoot(document.getElementById('root'));
root.render(<App />);

/* ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
) */