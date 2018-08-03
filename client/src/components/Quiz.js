import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class Quiz extends React.Component{

  componentWillMount(){
    //let token = localStorage.getItem('token');
    //if(!this.props.user.name && !token) this.props.history.push('/login')
    if(!this.props.user.name) this.props.history.push('/login');
  }

  render(){
    const colours=this.props.colours.colours.map((colour,i)=>{
      return <Link
          to={`/quiz/game/${colour.colour}`}
          key={i}>
        <div
            className="colour"
            onClick={()=>this.props.makeCurrent(colour.colour)}
            style={{backgroundColor:colour.colour}}
            key={i}>
        </div>
      </Link>
    });

    return(
        <div>
        <div className="content">
          <h1 className="choose-colour">pasirinkite spalvą:</h1>
          {colours}
        </div>
          <div
              className="chalkboard"
          >
            <span>taisyklės</span>
            <div className="text">
Žaidimo tikslas - palaipsniui sunkėjant sudėtingumui, kiekviename lygyje pasirinkti 5 iš bendro konteksto išsiskiriančias spalvas.
            Pasirinkus mažiau už 5 ar pasirinkus bent vieną netinkamą, žaidėjas pralaimi.
            </div>
          </div>


        </div>
    );
  };
}

const mapStateToProps=(state)=>{
  return{
    colours:state.colours,
    user:state.user
  }
};

const mapDispatchToProps=(dispatch)=>{
  return{
    makeCurrent(colour){
      dispatch({type:'MAKE_CURRENT', payload:colour})
    }
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);