import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import jwt from 'jsonwebtoken';
import Header from './components/Header';
import Content from './components/Content';
import Array from './components/Array';
import Quiz from './components/Quiz';
import QuizGame from './components/QuizGame';
import Statistics from './components/Statistics';
import Gameover from './components/Gameover';
import Login from './components/Login';
import page404 from './components/404';

class AppRoutes extends React.Component{

  // componentWillMount() {
  //   const token = localStorage.getItem('token');
  //   if (!token) return;
  //   const user = jwt.decode(token.split(' ')[1]);
  //   console.log(user);
  //   if (user) this.props.setUser(user);
  // }

  render(){
    return(
        <BrowserRouter>
          <div>
            <Header/>
            <Switch>
              <Route path='/' component={Content} exact/>
              <Route path='/array' component={Array}/>
              <Route exact path='/quiz' component={Quiz}/>
              <Route exact path='/quiz/game/:colour' component={QuizGame}/>
              <Route exact path='/gameover' component={Gameover}/>
              <Route exact path='/statistics' component={Statistics}/>
              <Route exact path='/login' component={Login}/>
              <Route component={page404}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  };
}

export default AppRoutes;