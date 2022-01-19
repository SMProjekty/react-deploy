import {Route, Routes} from 'react-router-dom'

import './App.css';

import Main from './pages/Main';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import NewVisit from './pages/NewVisit'
import LastVisit from './pages/LastVisit'
import Admin from './pages/Admin'

const App = () => {

  return (
    <div className="App">
      <div className="top-red"></div>
      <div className="content">
        <Routes>
          <Route path='*' element={<Main/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/registration' element={<Registration/>}/>
          <Route path='/profile' element={<Profile />}/>
            <Route path='/visit' element={<NewVisit />}/>
            <Route path='/last' element={<LastVisit />}/>
        </Routes>
      </div>
      <div className="bot-red"></div>
    </div>
  );
}

export default App;
