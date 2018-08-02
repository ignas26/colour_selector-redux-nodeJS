import React from 'react';
import {NavLink} from 'react-router-dom';
import * as actions from "../actions/user";
import {connect} from "react-redux";

class Header extends React.Component{
  render(){
    return(
        <header>
          <NavLink className="homepage" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="quizpage" exact activeClassName="active" to="/quiz">Quiz</NavLink>
            <NavLink className="loginpage" exact activeClassName="active" to="/login">Login</NavLink>
            <NavLink className="stats" exact activeClassName="active" to="/statistics">Stats</NavLink>
          {/*{ this.props.user.name? <h1>esate prisijungęs kaip {this.props.user.name} </h1> : null}*/}
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