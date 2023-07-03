import React from 'react';

export default function Navbar() {

    return(

        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Full Stack App</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <button className="btn btn-outline-primary"> Add User </button>
            </nav>

        </div>

    )
}