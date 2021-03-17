import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import GoogleSheetsProvider from 'react-db-google-sheets';

import Nav from './components/Nav';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TableExample from './components/TableExample';

import './App.css';

require('dotenv').config()

class App extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
		currentUser: null
	  }
	}
  
	unsubscribeFromAuth = null
  
	componentDidMount() {
	  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
		if (userAuth) {
		  const userRef = await createUserProfileDocument(userAuth);
  
		  //setting the state to the user signing in
		  userRef.onSnapshot(snapShot => {
			this.setState({
			  currentUser: {
				id: snapShot.id,
				...snapShot.data()
			  }
			});
		  });
		}
		else {
		  this.setState({currentUser: userAuth});
		}
	  });
	} 
	
	componentWillUnmount() {
	  this.unsubscribeFromAuth();
	}
  
	render () {
		return (
			<GoogleSheetsProvider>
				<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/portfolio' component={Portfolio} />
				<Route exact path='/contact' component={Contact} />
				<Route exact path='/table' component={TableExample} />
				<Route path='/signin' component={SignInAndSignUpPage} />
				</Switch>  
			</div>
			
			</GoogleSheetsProvider>
		);
	}
};

export default App;
