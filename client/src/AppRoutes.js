import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import LoggedOut from './components/LoggedOut';
import Content from './components/Content';
import Array from './components/Array';
import Quiz from './components/Quiz';
import QuizGame from './components/QuizGame';
import Statistics from './components/Statistics';
import Gameover from './components/Gameover';
import WinGame from './components/WinGame';
import Login from './components/Login';
import page404 from './components/404';

class AppRoutes extends React.Component{

  render(){
    return(
        <BrowserRouter>
          <div>
            <LoggedOut/>
            <Header/>
            <Switch>
              <Route path='/' component={Content} exact/>
              <Route path='/array' component={Array}/>
              <Route exact path='/quiz' component={Quiz}/>
              <Route exact path='/quiz/game/:colour' component={QuizGame}/>
              <Route exact path='/gameover' component={Gameover}/>
              <Route exact path='/wingame' component={WinGame}/>
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