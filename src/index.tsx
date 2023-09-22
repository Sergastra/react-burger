import React from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from "react-redux";
import App from './components/App/app';
import reportWebVitals from './reportWebVitals';
import store from "./services/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

  <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <App />
    </Provider>
  </DndProvider>
);
reportWebVitals();
