import React, {Component} from 'react'
import {Link} from 'react-router'
import {firebaseApp} from '../firebase'

class SignIn extends Component{

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signIn() {
        console.log('this.state', this.state)
        const {email, password} = this.state
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error})
            })
    }

    render(){
        return(
            <div className="">
                <h2>Sign In:</h2>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Write your email"
                        onChange={event => this.setState({email: event.target.value})}
                    /><br/>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Write your password"
                        onChange={event => this.setState({password: event.target.value})}
                    /><br/>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.signIn()}
                    >Sign In</button>
                    <button type="button" className="btn btn-default">
                        <Link to={'/signup'}>Sign up instead</Link>
                    </button>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}

export default SignIn