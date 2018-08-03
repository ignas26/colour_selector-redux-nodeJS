import React from 'react';
import {NavLink} from 'react-router-dom';
import * as actions from "../actions/user";
import {connect} from "react-redux";

class Header extends React.Component{
  render(){
    return(
        <header>
          <NavLink className="homepage" exact to="/">Home</NavLink>
          <NavLink className="quizpage" exact to="/quiz">Quiz</NavLink>
            <NavLink className="stats" exact to="/statistics">Stats</NavLink>
        </header>
    );
  };
}

const mapStateToProps = (state)=>{
  return{
    user:state.user
  }
};

export default connect(mapStateToProps, actions)(Header)