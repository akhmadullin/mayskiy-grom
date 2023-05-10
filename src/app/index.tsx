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
import App from "./view/components/app";

const container = document.getElementById("app")!;
const root = createRoot(container)
root.render(<App />);