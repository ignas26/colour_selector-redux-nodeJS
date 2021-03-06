import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';


class QuizGame extends React.Component {
  state = {
    squares: [],
    checker:false,
    clickCount: 0,
    level: 1,
    color: '',
    newValue: []
  };

  componentWillMount(){
    //let token = localStorage.getItem('token');
    //if(!this.props.user.name && !token) this.props.history.push('/login')
    if(!this.props.user.name) this.props.history.push('/login');
  }

  componentDidMount() {
    this.renderSquare();
  }

  clickHandler = (i) => {
    this.setState({clickCount:this.state.clickCount + 1});
    const newSquares = this.state.squares;
    newSquares[i][1]=!this.state.squares[i][1];
    this.setState({squares:newSquares});
    if (this.state.clickCount>3) {this.setState({
      checker:true
    })}
  };

  newLevel = () => {
    const newLevel = this.state.level + 1;
    this.setState({level: newLevel});
    let restart = 0;
    this.setState({clickCount: restart});
    this.setState({checker:false});
    if(!this.props.user.name) this.props.history.push('/login');
    this.renderSquare();
  };

  restart = ()=> {
    let restart = 0;
    this.setState({clickCount: restart});
    this.setState({checker:false});
    this.renderSquare();
  };

  correctTries = () => {
    const mainColour = `rgb(${this.state.newValue})`;

    const guess=this.state.squares.reduce((total, item)=>{
      if(item[0]!==mainColour && item[1]===true){
        total+=1;
      }
      return total;
    },0);
    const clicked=this.state.squares.reduce((clicks, item)=>{
      if(item[1]===true){
        clicks+=1;
      }
      return clicks;
    },0);

    if(this.state.level ===22) this.props.history.push('/wingame');

      if (guess === 5 && clicked === 5) {
        return this.newLevel();
      } else {
        this.props.resultsHandler(this.props.match.params.colour, this.state.level);
        this.props.history.push('/gameover');
      }
  };


  renderSquare = () => {

    const url = this.props.match.params.colour;

    let activeColour = this.props.variety.filter(item => {
      return item.colour === url
    });

    const r = activeColour[0].values[0];
    const g = activeColour[0].values[1];
    const b = activeColour[0].values[2];


    const newValue = [r, g, b];
    this.setState({newValue});
    let colours = [];

    const mainColour = `rgb(${newValue})`;
    const correct = `rgb(${newValue[0] + 100 / this.state.level},${newValue[1] + 100 / this.state.level},${newValue[2] + 150 / this.state.level})`;

    for (let i = 0; i < 49; i++) {
      const variable = [mainColour, false];
      colours.push(variable)
    }

    for (let i = 50; i < 55; i++) {
      const variable = [correct, false];
      colours.push(variable);
    }

    const shuffle = _.shuffle(colours);
    this.setState({squares: shuffle});

  };

    render(){
  const squares = this.state.squares.map((square, i) => {
    return <div
        key={i}
        onClick={() => this.clickHandler(i)}
        className={square[1]? "activeBlock" : "singleBlock"}
        style={{backgroundColor: square[0]}}
    >
    </div>
  });

      return (
          <div>
            <h1>Dabartinis lygmuo: <span  style={{color: this.props.match.params.colour}}>{this.state.level}</span></h1>
            <div
                onClick={() => this.restart()}
                className="refresh-button"
                style={{backgroundColor: this.props.match.params.colour}}
            >Refresh picks
            </div>
            <div className="allBlocks">
              {squares}
            </div>

            {this.state.checker && <div
                onClick={() => this.correctTries()}
                className="nl-button"
                style={{backgroundColor: this.props.match.params.colour}}
            >next level
            </div>}

          </div>
      )
    }
}

  const mapStateToProps = (state) => {
    return {variety: state.variety,
    user:state.user
    }
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      resultsHandler(colour, result) {
        dispatch({
          type: 'RESULTS_HANDLER',
          payload: [colour, result]
        })
      }
    };
  };


export default connect(mapStateToProps,mapDispatchToProps)(QuizGame)