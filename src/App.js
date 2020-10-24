import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './Pages/homePage';

import './App.css';

function App() {
  return (
		<div className="app">
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
