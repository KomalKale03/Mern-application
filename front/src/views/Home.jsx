import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div class="card text-center">
                <div class="card-header">
                Welcome to Online Banking System
                </div>
                <div class="card-body">
                    <h5 class="card-title">Please Confirm Are You a</h5>
                    <h5><p class="card-text"></p></h5>
                    <a class="btn btn-primary" href="/add" role="button">ADMIN</a>
                    <a class="btn btn-primary" href="/NewUser" role="button">USER</a>
                    
                        </div>
                </div>
            </div>
            )
}

            export default Home