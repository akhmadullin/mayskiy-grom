// import { StubDataLoader } from '../app/infrastructure/stub-data-loader';

// const loadDataAndShow = async () => {
//     const stubDataLoader = new StubDataLoader();

//     console.log('Start loading data...');

//     const data = await stubDataLoader.loadData('A');

//     console.log('Data was loaded', data);
// };

// loadDataAndShow();
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