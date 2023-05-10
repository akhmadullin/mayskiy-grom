import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './view/state/store';
import App from './view/components/app';

const container = document.getElementById("app")!;
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);