import React, {useEffect, useState} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect } from 'react-router-dom';
  import styled from 'styled-components';
  import { Landing } from './pages/landing'
  import { Home } from './pages/home'
  import { Profile } from './pages/profile'
  import { Movies } from './pages/movies';
  

const App = () => {
  const [user, setUser] = useState();
  const [movies, setMovies] = useState([]);

  return (
    <AppContainer>
      {user ? <Redirect to='/home' /> : <Redirect to ='/' />}
      <Route exact path='/'>
        <Landing user={user} setUser={setUser} />
      </Route>
      <Route path='/home'>
        <Home movies={movies} setMovies={setMovies} />
      </Route>
      <Route path='/movies'>
        <Movies />
      </Route>
      <Route path='/profile'>
        <Profile user={user} setUser={setUser} />
      </Route>
    </AppContainer>
  )
};

const AppContainer = styled(Router)`
width: 100vw;
height: 100vh;
`

export default App;
