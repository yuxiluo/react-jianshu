import React, { Component, Fragment } from 'react'; 
import { Provider } from 'react-redux'; 
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Writer from './pages/writer';
import Register from './pages/register';
import RecommendList from './pages/recommendList';
import HotArticle from './pages/hotArticle';
import store from './store'; 

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router>
          <Fragment> 
            <Route exact path="/" component = {Home} />
            <Route exact path="/login" component = {Login} />
            <Route exact path="/detail/:id" component = {Detail} />
            <Route exact path="/writer" component = {Writer} />
            <Route exact path="/register" component = {Register} />
            <Route exact path="/recommendlist" component = {RecommendList} />
            <Route exact path="/weekly" component = {HotArticle} />
            <Route exact path="/monthly" component = {HotArticle} />
          </Fragment>
        </Router> 
      </Provider>
    );
  }
} 

export default App;
