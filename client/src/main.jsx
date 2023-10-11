import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';

const root = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Router>
      <App />
      <Switch>
        <Route exact path='/' component={SearchBooks} />
        <Route exact path='/saved' component={SavedBooks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
    </Router>,
    root
  );
}