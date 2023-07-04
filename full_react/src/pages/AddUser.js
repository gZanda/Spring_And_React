import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    // Navigate
    let navigate = useNavigate();

    // States iniciais
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");

    // Function to handle submit
    const handleSubmit = async (e) => {
        // Não permite enviar form vazio
        e.preventDefault();
        // Monta o objeto
        const user = {username,email};
        // Envia o objeto para o backend
        await axios.post("http://localhost:8080/post",user);
        // Redireciona para o INDEX
        navigate("/");
    }

    return(

        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> Register User </h2>

                    <form onSubmit={(e)=> handleSubmit(e)} >
                        <div className="mb-3" >
                            <label htmlFor="Name" className="form-label"> Name </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3" >
                            <label htmlFor="Name" className="form-label"> Email </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Email"
                                name="email"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-primary" > Submit </button>
                    </form>
                </div>
            </div>
        </div>

    )

}