import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

import {profile} from '../forms/login/UseLogin';

function HistoryVisit() {
    //user data
    const user = profile[0]
    const id = user.UserId

    const [history, setHistory] = useState([]);

    useEffect(() => {
        GetHistory()
    },[])

    function GetHistory (){
        axios.get(`https://fryzjerprojekt.herokuapp.com/visitW/${id}/`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
         })
         .then(res => {
              setHistory(res.data)
          })
         .catch(err => console.log(err))
    }

    return (
        <div>

            <ul>
                {
                    (history.map(post=>
                    <li key={post.VisitId}>
                        <div>{post.Ddate}</div>
                        <div>{post.Hhour}</div>
                        <div>{post.servicee.Name}</div>
                        <div>{post.servicee.Price} zł</div>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default HistoryVisit