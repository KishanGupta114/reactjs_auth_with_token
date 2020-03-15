import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Login extends Component {

    constructor(props) {
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault()
        const { username, password } = this.state
        //login stupid logic
        if(username === "Hey" && password === "Hey") {
            localStorage.setItem("token", "jkdsnvskjnvkjdnsvndskvndsklnvdsl")
            this.setState({
                loggedIn : true
            })
        }
    }
    render() {
        if(this.state.loggedIn) {
            return <Redirect to='/admin' />
        }
        return (
            <div style={{ textAlign: 'center' }} >
               <h1>Login</h1><hr /> 

               <form onSubmit={this.submitForm} style={{ marginTop: '10%' }} >
                    Username: <input 
                    type='text'
                    placeholder='username' 
                    name='username' 
                    value={this.state.username} 
                    onChange={this.onChange} />

                    <br />
                    <br />
                   Password: <input 
                    type='password' 
                    placeholder='password' 
                    name='password' 
                    value={this.state.password} 
                    onChange={this.onChange} />

                    <br />
                    <br />
                    <input type='submit' />
               </form>
               
               <h6 style={{color: 'green'}}>*Hint=> username & password : Hey</h6>
               
            </div>
        )
    }
}
