import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {firebaseApp} from './firebase'
import {logUser} from './actions'
import reducer from './reducers'

import App from './components/App'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const store = createStore(reducer)

firebaseApp.auth().onAuthStateChanged(user => {
    if (user){
        console.log('User has signed in or up.', user)
        const {email} = user
        store.dispatch(logUser(email))
        browserHistory.push('/app')
    }else {
        console.log('User has signed out or still need to sign in.')
        browserHistory.replace('/SignIn')
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App}/>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/SignUp" component={SignUp}/>
        </Router>
    </Provider>,document.getElementById('root')
)