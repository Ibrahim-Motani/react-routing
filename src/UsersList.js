import React, { useState, useEffect } from 'react';
import { Link, Route } from "react-router-dom";
import axios from 'axios';
import IndividualUser from './IndividualUser';

function UsersList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                const result = response.data;
                setData(result);
            });
     }, []);
    
    return (
      <div>
        <h1>Users Component</h1>
        <h2>Listing users - {data.length}</h2>
        <ul>
          {data.map((obj, index) => {
            return (
              <div>
                <li key={index}>
                  <Link to={`/users/${obj.id}`}>{obj.username}</Link>
                </li>
                
              </div>
            );
          })}
        </ul>
      </div>
    );
}

export default UsersList;
