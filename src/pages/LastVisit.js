import React from 'react';
import {Link} from 'react-router-dom';

import './ProfileStyle.css';
import HistoryVisit from '../components/visit/HistoryVisit';

function LastVisit(props) {
    const user = props.user

    return(

    <div className='text'>
            <h1>Historia Twoich wizyt</h1>
            <div className="grey_list">
            <h1>Odwiedzono nas:</h1>
              <div className='posts'>
                <HistoryVisit user = {user}/>
              </div>
            </div>

              <div className='btns-three'>
              <Link to={'/profile'}>
                <button className="btn">Wstecz</button>
              </Link>
              </div>
    </div>
    );
  }

export default LastVisit;