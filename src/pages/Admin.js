import React from 'react'
import {Link} from 'react-router-dom';

import AdminVisit from '../components/visit/AdminVisit';

function Admin() {
  return (
    <div className='text'>
      <h1>Witaj, Administratorze </h1>
      <div className='btns'>
        <Link to={'/'}>
          <button className="btn">Wyloguj</button>
        </Link>
      </div>

      <div className="grey_list">
        <h1>Kolejne wizyty</h1>
        <div className='posts'>
          <AdminVisit/>
        </div>
      </div>
    </div>
  )
}

export default Admin
