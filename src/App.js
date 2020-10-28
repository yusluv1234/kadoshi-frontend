import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/homePage/homePage';
import SignIn from './Pages/signIn/signIn';
import AboutPage from './Pages/aboutPage';

import './App.css';

function App() {
  return (
		<div className='app'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/signIn' component={SignIn} />
			  <Route exact path='/about' component={AboutPage} />
			</Switch>
		</div>
	);
}

export default App;
