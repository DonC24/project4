import React from 'react';

import Moment from 'moment';


class Eventdetails extends React.Component {
    constructor(props) {
        super(props);
    }

  render() {
    //console.log("in dashboard: ");
    let allusers = this.props.allusers;
    let currentuser = this.props.currentuser;
    let upcomingevents = this.props.upcomingevents;
    let matched = this.props.matchedperson;
    let upcominglist = upcomingevents.map(anevent => {
         console.log(anevent);
        // console.log("matched");
        // console.log(matched);
        let matchpersonevent = matched.find(amatch => amatch.event_id === anevent.id);
        // console.log(matchpersonevent)
        let person = allusers.find(aperson => aperson.id === matchpersonevent.recipient_id);
        // console.log(person);
        let formatteddate = Moment(anevent.eventdate).format("dddd, DD MMM YY, h:mm a");
        let seematched = "";
        if(currentuser === anevent.user_id){
            seematched = <a href="#">See list of matched persons</a>
        }
        return(
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 cards">
                <div className="card" style={{width: 18 + "rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{anevent.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{formatteddate}</h6>
                        <p className="card-text">Notes about this event: <br />
                        {anevent.notes}</p>
                        <p className="card-text">The recipient of your gift is: <br />
                        {person.name} ({person.email})</p>
                        <p className="card-text">{seematched}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <button onClick={(event) => {this.props.handleCreateEvent(event)}}>Create Event</button>
            <h3>Upcoming Events</h3>
            <div className="upcomingevents row">
                {upcominglist}
            </div>
            <h3>Past Events</h3>
            <div className="pastevents row">
                {pastlist}
            </div>
        </div>
    );
  }
}


export default Eventdetails;