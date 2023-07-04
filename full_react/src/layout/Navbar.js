import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

    return(

        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand mx-3 " href="#">Full Stack App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="btn btn-outline-primary mx-3" to="/addUser" > Add User </Link>
            </nav>

        </div>

    )
}