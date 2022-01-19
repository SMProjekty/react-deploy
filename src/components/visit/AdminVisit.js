import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


function AdminVisit() {

    const [next, setNext] = useState([]);

    useEffect(() => {
        ShowVisit();
    },[])

    function ShowVisit(){
        axios.get(`https://fryzjerprojekt.herokuapp.com/vall`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
         })
        .then(res => {
             console.log(res)
              setNext(res.data)
        })
        .catch(err => console.log(err))
    }

    //change vist status
    function PutVisit(id) {
        const idvisit = id
        let info = ('Coś poszło nie tak..')

         fetch(`https://fryzjerprojekt.herokuapp.com/visit/${idvisit}/`,
         {
             method: 'PUT',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify({VisitId: idvisit, Status: 'W'})
        })
        .then(() => {
            info = 'Wykonano wizytę'
            ShowVisit();
        });
    }

    return (
        <div>

            <ul>
                {
                    next.map(post=>
                    <li key={post.VisitId}>
                        <div>{post.Ddate}</div>
                        <div>{post.Hhour}</div>
                        <div>{post.servicee.Name}</div>
                        <button className='btn' onClick={()=>PutVisit(post.VisitId)}>Wykonaj</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default AdminVisit
