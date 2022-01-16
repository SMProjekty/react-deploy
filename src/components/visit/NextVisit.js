import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'


function NextVisit(props) {
    const user = props.user
    const id = user.UserId
    const [next, setNext] = useState([]);


    useEffect(() => {
        ShowVisit();
      },[])
      function ShowVisit(){
        axios.get(`https://fryzjerprojekt.herokuapp.com/${id}/`,
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

      function DelVisit(id) {
        const idvisit = id
        let info = ('Coś poszło nie tak..')

            axios.delete(`https://fryzjerprojekt.herokuapp.com/${idvisit}/`,
            {
                method: 'Delete',
                headers: {'Content-Type': 'application/json'},
             })
                .then(() => {
                    info = 'Odwołano wizytę'
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
                        <div>{post.ServiceeId}</div>
                        <button className='btn' onClick={()=>DelVisit(post.VisitId)}>Anuluj</button>
                    </li>)
                }
            </ul>

        </div>
    )
}

export default NextVisit
