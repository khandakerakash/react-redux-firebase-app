import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {firebaseApp} from './firebase'
import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

firebaseApp.auth().onAuthStateChanged(user => {
    if (user){
        console.log('User has signed in or up.', user)
    }else {
        console.log('User has signed out or still need to sign in.')
    }
})

ReactDOM.render(
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App}/>
        <Route path="/SignIn" component={SignIn}/>
        <Route path="/SignUp" component={SignUp}/>
    </Router>,document.getElementById('root')
)