import React from "react";
// Import Axios
import Axios from "axios";
import { useState,useEffect } from "react";

export default function Home() {

    // State - Lista de Users
    const [users, setUsers] = useState([])

    // UseEffect
    useEffect(() => {
    
        loadUsers();

    },[])

    // GET function
    const loadUsers = async() => {
    
        const result = await Axios.get("http://localhost:8080/getAll");
        setUsers(result.data);

    }

    return(

        <div className="container">
            <div className="py-4">

            <table className="table border">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user,index) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }

                   
                </tbody>
                </table>

            </div>
        </div>

    )

}