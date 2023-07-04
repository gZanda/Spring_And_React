import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function EditUser() {

    // Navigate
    let navigate = useNavigate();

    // URL params
    const {id} = useParams();

    // States iniciais
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");

    // Function to handle submit
    const handleSubmit = async (e) => {
        // Não permite enviar form vazio
        e.preventDefault();
        // Monta o objeto
        const user = {username,email};
        // PUT REQUEST
        await axios.put(`http://localhost:8080/put/${id}`,user);
        // Redireciona para o INDEX
        navigate("/");
    }

    // Function to Load user
    const loadUser = async () => {

        const result = await axios.get(`http://localhost:8080/getOne/${id}`);

        // Get the username from result
        setUsername(result.data.username);
        // Get the email from result
        setEmail(result.data.email);

    }

    // UseEffect
    useEffect(() => {

        loadUser();

    },[])

    return(

        <div className="container" >
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4"> Edit User </h2>

                    <form onSubmit={(e)=> handleSubmit(e)} >
                        <div className="mb-3" >
                            <label htmlFor="Name" className="form-label"> Name </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Your Name"
                                name="username"
                                value={username}
                                onChange={(e)=> setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3" >
                            <label htmlFor="Name" className="form-label"> Email </label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Your Emil"
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