import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate} from 'react-router';
import './App.css';

import PostsPage from './components/postsPage';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Login from './components/login';

function App() {
  const perfil = {
    avatar: "/pexels-andrea-piacquadio-733872.jpg",
    username: "jcerdar",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum tellus tempor, tempus est eu."
  }


  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/login" element={!login ? <Login onLoginComplete={() => {
          setLogin(true);
        }} />: <Navigate to="/"/>} />
        <Route exact path='/' element={!login ? <Navigate to='/login' /> : <PostsPage onLoginFailure={(bool) => setLogin(bool)}/>} />
        <Route path='/profile' element={!login ? <Navigate to='/login' /> : <Profile avatar={perfil.avatar}
          username={perfil.username}
          bio={perfil.bio} onLoginFailure={(bool) => setLogin(bool)}/>} />
      </Routes>
    </div>);
}

export default App;
