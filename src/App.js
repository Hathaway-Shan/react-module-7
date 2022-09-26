import BookList from './components/book/BookList';
//import React Router functions from React aliasing BrowserRouter to Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  // TODO: Add routes to books & views
  return (
    <Router>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route path="/" component={Home}>
            <Home />
            {/* <BookList /> */}
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
