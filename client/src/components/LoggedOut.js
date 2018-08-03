import React from 'react';
import {connect} from "react-redux";
import * as actions from "../actions/user";


class LoggedOut extends React.Component {

  render() {

    return ( <loggedOut>
          <div className="logout">
            {this.props.user.name &&
            <button className="logout-btn"
                    onClick={() => {
                      this.props.logout();
                    }}>Logout
            </button>
            }
          </div>
          <div className="logged-in">{this.props.user.name ?
              <h1>Jūs esate prisijungę kaip <span> {this.props.user.name} </span></h1> : null} </div>
      <h2 className="message">{this.props.user.message}</h2>
          <div className="clearfix"></div>
        </loggedOut>
    )
  };
}



const mapStateToProps=(state)=>{
  return{user:state.user}
};


export default connect(mapStateToProps, actions)(LoggedOut);