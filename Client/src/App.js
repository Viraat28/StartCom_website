import './App.css';
import React, { useState, createContext } from "react";
import { useSelector } from 'react-redux';
import Auth from './pages/Auth/Auth';
import {Home} from './pages/home/Home';
import {BrowserRouter,  Routes,Route, Navigate} from 'react-router-dom'
import ProfilePage from './pages/Profile/ProfilePage';
import LandingPage from './pages/LandingPage/LandingPage'
import Chat from './pages/Chat/Chat';
import Admin from './components/Admin/Admin';
// export const store = createContext();
function App() {
  // const [users, setUsers] = useState([]);
  // const [pd,setpd]=useState([]);
  const user=useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
      <div className='blur' style={{top:'-18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%' ,left:'-8rem'}}></div>
      <div className='blur' style={{top:'66%' ,right:'-8rem'}}></div>
      <div className='blur' style={{top:'80%' ,right:'38rem'}}></div>
      <Routes>
        {/* <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/auth' element={<Auth/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route> */}
{/* 
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={user?<Home/>:<Auth/> }></Route> */}

        {/* <Route path='/auth' element={user?<Navigate to ="../home"/>:<Auth/> }></Route> */}

        {/* <Route path='/auth' element={user?<Home/>:<Auth/> }></Route>
        <Route
          path="/profile/:id"
          element={user ? <ProfilePage /> : <Auth/>}
        />
        <Route path='/chat' element={<Chat/>}></Route>  */}

<Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <ProfilePage/> : <Navigate to="../auth" />}
        />
         <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      
    
    </div>
    
  );
}



export default App;
