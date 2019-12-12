import React from 'react';

import Moment from 'moment';


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    mapfunc(array) {
        return array.map(anevent => { //need return here to return the entire output of the map
            // console.log(anevent);
            // console.log("matched");
            // console.log(matched);
            let matched = this.props.matchedperson;
            let currentuser = this.props.currentuser;
            let matchpersonevent = matched.find(amatch => amatch.event_id === anevent.id);
            // console.log(matchpersonevent)
            let allusers = this.props.allusers;
            let person = allusers.find(aperson => aperson.id === matchpersonevent.recipient_id);
            // console.log(person);
            let formatteddate = Moment(anevent.eventdate).utc().format("dddd, DD MMM YY, h:mm a");
            let seematched = "";
            let thiseventid = anevent.id;
            // console.log(thiseventid);

            if(currentuser === anevent.user_id){
                seematched = <button className="btn btn-outline-info btn-sm" value={`${thiseventid}`} onClick={(event)=>{this.props.allMatchesClick(event)}}>See list of matched persons</button>
            }
            return( //this only returns once per iteration of the map loop

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 cards">
                    <div className="card" style={{width: 25 + "rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{anevent.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{formatteddate}</h6>
                            <p className="card-text">Notes about this event: <br />
                            {anevent.notes}</p>
                            <p className="card-text">The recipient of your gift is: <br />
                            {person.name} ({person.email})</p>
                            <p className="card-text">{seematched}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary" value={`${thiseventid}`} onClick={(event)=>{this.props.handleDetailsClick(event)}}>Event Details</button>
                        </div>
                    </div>
                </div>
            )
        })
    }


  render() {
    // console.log("in dashboard: ");


    let upcomingevents = this.props.upcomingevents;

    let pastevents = this.props.pastevents;

    let upcominglist = this.mapfunc(upcomingevents);
    let pastlist = this.mapfunc(pastevents);


    return (
        <div>
            <div className="createeventbtndiv col-12">
                <button className="btn btn-outline-primary btn-lg createeventbtn" onClick={(event) => {this.props.handleCreateEvent(event)}}>Create Event</button>
            </div>
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


export default Dashboard;