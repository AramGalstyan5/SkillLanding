import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';

const root = createRoot(document.getElementById('root'));
export const history = createBrowserHistory();
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
