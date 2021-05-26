import React, { useRef } from 'react'
import { auth } from '../firebase'
import './Signin.css'
const Signin = () => {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const signUp = e => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => console.log(err))
    }
    const signIn = e => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => console.log(err))
    }
    return (
        <div className="signin">
            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" name="" id="" />
                <input ref={passwordRef} type="password" name="" id="" />
                <button onClick={signIn}>Sign In</button>
                <h6>Not yet register? <span onClick={signUp} className="signin__link">Sign Up</span></h6>
            </form>
        </div>
    )
}

export default Signin
