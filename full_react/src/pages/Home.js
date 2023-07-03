import React from "react";
// Import Axios
import Axios from "axios";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {

    // State - Lista de Users
    const [users, setUsers] = useState([])

    // URL params
    const {id} = useParams();

    // UseEffect
    useEffect(() => {
    
        loadUsers();

    },[])

    // GET function
    const loadUsers = async() => {
    
        const result = await Axios.get("http://localhost:8080/getAll");
        setUsers(result.data);

    }

    // DELETE function
    const deleteUser = async(id) => {

        await Axios.delete(`http://localhost:8080/delete/${id}`);
        loadUsers();

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
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-outline-primary mx-2" to={`/EditUser/${user.id}`}> Edit </Link>
                                    <button className="btn btn-danger mx-2" onClick={()=>deleteUser(user.id)} > Delete </button>
                                </td>
                            </tr>
                        ))
                    }

                   
                </tbody>
                </table>

            </div>
        </div>

    )

}