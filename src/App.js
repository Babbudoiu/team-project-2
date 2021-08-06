import React, {useEffect, useState} from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Redirect } from 'react-router-dom'
  import { Landing } from './pages/landing'
  import { Home } from './pages/home'
  import { Profile } from './pages/profile'
  import './style.css'
  import { Watchlist } from './pages/watchlist';
  import { authUser } from './utils';
  

const App = () => {
  const [user, setUser] = useState();
  const [movies, setMovies] = useState([]);
  // const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    authUser(setUser)
  }, [user]);

    return (
      <Router>
    <div className="appContainer">
      {user ? <Redirect to='/home' /> : <Redirect to ='/' />}
      <Route exact path='/'>
        <Landing user={user} setUser={setUser} />
      </Route>
      <Route path='/home'>
        <Home movies={movies} setMovies={setMovies} />
      </Route>
      <Route path='/watchlist'>
        <Watchlist  movies={movies} setMovies={setMovies} />
      </Route>
      <Route path='/profile'>
        <Profile user={user} setUser={setUser} />
      </Route>
    </div>
    </Router>
  )
};


export default App;
