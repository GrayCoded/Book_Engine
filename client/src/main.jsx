import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.jsx'
import SearchBooks from './pages/SearchBooks'
import SavedBooks from './pages/SavedBooks'

const root = document.getElementById('root');

if (root) {
  const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <Router>
    <App>
      <Switch>
        <Route exact path='/' component={SearchBooks} />
        <Route exact path='/saved' component={SavedBooks} />
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
      </Switch>
    </App>
  </Router>
);
}