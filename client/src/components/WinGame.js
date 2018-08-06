import React from 'react';

const WinGame = (props) =>{
  return(
      <div className="wingame">
        <div className="message">
          <h1>Congratulations! You have reached the maximum available levels. You've completed the game!</h1>
          <div onClick={()=>props.history.push('statistics')} className="stats">Check out your stats</div>
          <div className="suggestions">
            <div onClick={()=>props.history.push('/quiz')} className="replay">Play one more time. Maybe try a different colour?</div>
            <div onClick={()=>props.history.push('/')} className="home">Return to home page</div>
          </div>
        </div>
      </div>
  );
};

export default WinGame