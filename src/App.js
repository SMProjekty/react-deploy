//import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Profile from './pages/Profile';
import NewVisit from './pages/NewVisit'
import LastVisit from './pages/LastVisit'

import {Route, Routes} from 'react-router-dom'

const App = () => {

  const user ={ Email: "michael1999@op.pl",
  LastName: "Ślązak",
  Name: "Michał",
  UserId: 2}
  return (

    <div className="App">

      <div className="top-red"></div>
      <div className="content">
      <Routes>
        <Route path='*' element={<Main/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/profile' element={<Profile user={user}/>}/>
          <Route path='/visit' element={<NewVisit user={user}/>}/>
          <Route path='/last' element={<LastVisit user={user}/>}/>
      </Routes>
      </div>
      <div className="bot-red"></div>
    </div>
  );
}

export default App;
