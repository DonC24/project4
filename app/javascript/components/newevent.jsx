import React from 'react';


class NewEvent extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    //console.log("in newevent: ");
    //console.log(this.props.currentuser);
    //console.log(typeof userid);


    return (
        <div>
            <p>Event Name:</p>
            <input name="name" type="text" onChange={(event) => {this.props.handleName(event)}} />
            <p>Event Date and time:</p>
            <input name="eventdate" type="datetime-local" onChange={(event) => {this.props.handleEventdate(event)}}/>
            <button onClick={(event) => {this.props.handleEventSubmit(event)}}>Submit</button>
        </div>
    );
  }
}


export default NewEvent;