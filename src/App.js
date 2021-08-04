import { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';

import Home from './pages/home/home'
import Publications from './pages/publications/publications'

function App() {
  const [withBg, setWithBg] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight - 100
      setWithBg(window.scrollY >= windowHeight)
    })
  })

  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/publications'} component={Publications}/>
        <Redirect to={'/'} />
      </Switch>
    </Router>
  );
}

export default App;
