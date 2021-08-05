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
