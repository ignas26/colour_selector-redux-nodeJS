import React from 'react';
import {connect} from "react-redux";
import * as actions from "../actions/user";
import {Link} from 'react-router-dom';


class LoggedOut extends React.Component {
state={
  temp:"Vartotojas admin yra neprisijungęs"
};

  render() {

    return ( <div>
          <div className="loggout">
            {this.props.user.name &&
            <button className="loggout-btn"
                    onClick={() => {
                      this.props.logout();
                    }}>Logout
            </button>
            }
          </div>
          <div className="loggedIn"> {this.props.user.name ?
              <h1>Jūs esate prisijungę kaip <span> {this.props.user.name} </span></h1> : <Link to={'/login'} className="notLogged-button"><button> Prisijungti</button> </Link>} </div>
          <div className="clearfix"></div>
        </div>
    )
  };
}

const mapStateToProps=(state)=>{
  return{user:state.user}
};

export default connect(mapStateToProps, actions)(LoggedOut);