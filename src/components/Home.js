import React from 'react'
import { auth } from '../firebase'

const Home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>
            <p><button onClick={() => auth.signOut()}>Sign Out</button></p>
        </div>
    )
}

export default Home
