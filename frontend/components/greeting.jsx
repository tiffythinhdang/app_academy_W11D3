import React from 'react';

class Greeting extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    // let user;
    // if (loggedIn) { user = state.entities.users[state.session.id] }
    // let user =
    return(
      <div>
        {this.props.currentUser ? (
          <p>Welcome {this.props}</p>
          <button onCLick={this.props.logout}></button>
        ) : (

          )
      }
      </div>
    )
  }
}

export default Greeting;