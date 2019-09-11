import React from 'react';

import Moment from 'moment';


class Eventdetails extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    console.log(this.props);

    let currenteventid = this.props.eventid;
    let matched = this.props.matchedperson;
    let allusers = this.props.allusers;



    let matchpersonevent = matched.find(amatch => amatch.event_id === currenteventid);
    // console.log(matchpersonevent)
    let person = allusers.find(aperson => aperson.id === matchpersonevent.recipient_id);

    let formatteddate = Moment(this.props.eventdate).utc().format("dddd, DD MMM YY, h:mm a");
    let now = Moment();
    // console.log(now);
    let momtdate = Moment(this.props.eventdate);
    // console.log(momtdate);
    let duration = ""
    let durtxt = "";
    if (now < momtdate){
        console.log("event is after now");
        duration = Moment(momtdate).fromNow();
        durtxt = `is ${duration}`;
    } else {
        console.log("event has passed");
        duration = Moment(momtdate).fromNow();
        durtxt = `was ${duration}`;
    }



    return (
        <div>
            <div>
                <h2>Event Details</h2>
                <h3>{this.props.eventname}</h3>
                <h4>{formatteddate}</h4>
                <h5>This event {durtxt}</h5>
                <h6>Notes:</h6>
                <p>{this.props.eventnotes}</p>
            </div>
            <div>
                <p>You have been matched with {person.name} ({person.email})</p>
            </div>
            <div>
                <p>Wishlist Item:</p>
            </div>
            <div>
                <input name="item" type="text" onChange={(event) => {this.props.handleWishItem(event)}} />
                <button value={currenteventid} onClick={(event) => {this.props.handleWishSubmit(event)}}>Submit</button>
            </div>


        </div>
    );
  }
}


export default Eventdetails;