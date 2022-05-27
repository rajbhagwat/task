import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Car Clean</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarID">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarID">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>

                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}