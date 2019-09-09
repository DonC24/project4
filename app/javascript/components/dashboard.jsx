import React from 'react';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    //console.log("in newevent: ");
    //console.log(this.props.currentuser);
    //console.log(typeof userid);


    return (
        <div>
            <button onClick={(event) => {this.props.handleCreateEvent(event)}}>Create Event</button>

        </div>
    );
  }
}


export default Dashboard;