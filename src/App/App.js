import Header from '../container/Header';
import UserComponent from '../container/UserComponent';
import './App.css';
import { BrowserRouter as Router, Rotuer, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={UserComponent} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
