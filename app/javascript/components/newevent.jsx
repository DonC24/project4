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
        <div className="form-group col-6">
            <label htmlFor="name">Event Name:</label>
            <input className="form-control" name="name" type="text" onChange={(event) => {this.props.handleName(event)}} />
            <label htmlFor="notes">Notes:</label>
            <input className="form-control" name="notes" type="text" placeholder="Notes about the event (e.g. theme, budget)" onChange={(event) => {this.props.handleNotes(event)}} />
            <label htmlFor="eventdate">Event Date and time:</label>
            <input className="form-control" name="eventdate" type="datetime-local" onChange={(event) => {this.props.handleEventdate(event)}}/>
            <button className="btn btn-primary" onClick={(event) => {this.props.handleEventSubmit(event)}}>Submit</button>
        </div>
    );
  }
}


export default NewEvent;