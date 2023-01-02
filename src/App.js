import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/home/home'
import PublicationsPage from './pages/publications/publications'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/publications'>
          <PublicationsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
