import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className='window'>
        <NavBar />
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path ="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
