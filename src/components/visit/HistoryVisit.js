import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'

function HistoryVisit(props) {
    const user = props.user
    const id = user.UserId
    const [history, setHistory] = useState([]);
    const [servicee, setServicee] = useState([]);
    const [last, setLast] = useState([])

    useEffect(() => {
        GetServicee()
        GetHistory()

       // console.log(history)
      }
      ,[])


  function GetServicee(){
        axios.get(`https://fryzjerprojekt.herokuapp.com/servicee`,
        {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
         })
         .then(res => {
            // console.log(res)
              setServicee(res.data)
          })
         .catch(err => console.log(err))
      }

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

    async function tra (){
        for (var i=0; i < history.length; i++) {
             var id = history[i].ServiceeId
             for (var j =0; i<servicee.length; j++){
                var k =servicee[j].ServiceeId
                 if (k === id){
                    setHistory[id].ServiceeId(servicee[k].Name)
                    console.log(history)
                 }
                }
            }
      }

      tra()

    return (
        <div>

            <ul>
                {
                    (history.map(post=>
                    <li key={post.VisitId}>
                        <div>{post.Ddate}</div>
                        <div>{post.Hhour}</div>
                        <div>{post.Name}</div>
                        <div>{post.Name}</div>
                    </li>))
                }
            </ul>

        </div>
    )
}

export default HistoryVisit