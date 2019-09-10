import React from 'react';


import Dashboard from './dashboard';
import NewEvent from './newevent';
import AddUsers from './addusers';
import Matching from './matching';
import Eventdetails from './eventdetails';

export default class App extends React.Component{
    constructor() {
        super();

        this.state = {
            currentComponent: "page1",
            name: '',
            notes: '',
            eventdate: null,
            user_id: null,
            eventid:'',
            emaildom: null,
            allusers: [],
            user_ids: [],
            pairs: [],
            upcomingevents: [],
            pastevents: [],
            matchedperson: []
        };
        this.changeComponent = this.changeComponent.bind(this);
        this.handleCreateEvent = this.handleCreateEvent.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNotes = this.handleNotes.bind(this);
        this.handleEventdate = this.handleEventdate.bind(this);
        this.handleUsersSubmit = this.handleUsersSubmit.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
        this.getData = this.getData.bind(this);
        this.handleDetailsClick = this.handleDetailsClick.bind(this);
        this.allMatchesClick = this.allMatchesClick.bind(this);
    }

    componentDidMount(){
        const node = document.getElementById('currentuser');
        const data = JSON.parse(node.getAttribute('data'));
        console.log("inside app jsx ");
        console.log(data);
        let userid = data.id;
        let useremail = data.email;
        var emailarr = useremail.split("@");
        let emaildom = emailarr[1];
        // console.log(emaildom);

        const allusersdiv = document.getElementById('allusers');
        var allusersjson = JSON.parse(allusersdiv.getAttribute('data'));
        // console.log(allusersjson);

        // console.log("this state allusers");

        let alluserslist = this.state.allusers;

        const upcomingeventsdiv = document.getElementById('upcomingevents');
        const upcomingeventsjson = JSON.parse(upcomingeventsdiv.getAttribute('data'));
        // console.log("upcoming events");
        // console.log(upcomingeventsjson);

        const pasteventsdiv = document.getElementById('pastevents');
        const pasteventsjson = JSON.parse(pasteventsdiv.getAttribute('data'));
        // console.log("past events");
        // console.log(pasteventsjson);

        const matchedpersondiv = document.getElementById('matchedperson');
        const matchedpersonjson = JSON.parse(matchedpersondiv.getAttribute('data'));
        // console.log("Matched person");
        // console.log(matchedpersonjson);

        this.setState({ user_id: userid, emaildom: emaildom, allusers: allusersjson, upcomingevents: upcomingeventsjson, pastevents: pasteventsjson, matchedperson: matchedpersonjson});
        // console.log(this.state);
    }

    changeComponent(input){
        console.log(input);
        console.log(this);
        this.setState({currentComponent: input});
    }

    handleCreateEvent(event){
        this.changeComponent("page2")
    }


    handleName(event){
        let input = event.target.value;
        this.setState({name: input});
        console.log(this.state);
    }

    handleNotes(event){
        let input = event.target.value;
        this.setState({notes: input});
        console.log(this.state);
    }

    handleEventdate(event){
        console.log("in handle eventdate");
        let input = event.target.value;
        // console.log(typeof event.target.value)
        this.setState({eventdate: input});
        console.log(this.state);
    }

    handleEventSubmit(event){
        console.log("button clicked");
        console.log(this.state);
        var reactThis = this;

        var responseHandler = function() {
            console.log("in response handler");

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    // console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    // console.log(response.id);
                    reactThis.setState({eventid: response.id});
                    // console.log(reactThis.state);
                    reactThis.changeComponent("page3");
                }
            }
        };
        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("POST", "http://localhost:3000/events");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(this.state));
    }

    handleUsersSubmit(event){
        console.log("button clicked");
        console.log(this.state);
        var reactThis = this;

        var responseHandler = function() {
            console.log("in response handler: " + request.body);

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    // console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    // console.log(response.id);
                    // console.log(reactThis.state);
                    reactThis.changeComponent("page4");
                }
            }
        };

        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("PATCH", `http://localhost:3000/events/${this.state.eventid}`);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var obj = {user_ids: this.state.user_ids};
        request.send(JSON.stringify(obj));
    }


    handleCheckBox(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const newSelection = event.target.value;
        let newSelectionArray;
        // console.log("handlecheckbox");
        // console.log(event.target);

        if(this.state.user_ids.includes(newSelection)) {
          newSelectionArray = this.state.user_ids.filter(s => s !== newSelection)
        } else {
          newSelectionArray = [...this.state.user_ids, newSelection];
        }

        this.setState( prevState => ({ user_ids: newSelectionArray })
        )
    }

    handleDetailsClick(event){
        console.log("button clicked");
        // console.log(this.state);
        console.log(event.target.value);
        let thiseventid = event.target.value;
        var reactThis = this;

        var responseHandler = function() {
            console.log("in response handler");

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    //     console.log(response);
                    reactThis.setState({eventid: response.id, eventdate: response.eventdate, notes: response.notes});
                    // console.log(reactThis.state);
                     reactThis.changeComponent("page5");
                }
            }
        };
        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("GET", `http://localhost:3000/events/${thiseventid}`);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send();
    }

    allMatchesClick(event){
        console.log("button clicked");
        // console.log(this.state);
        console.log(event.target.value);
        let thiseventid = event.target.value;
        var reactThis = this;

        var responseHandler = function() {
            console.log("in response handler");

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    //     console.log(response);
                    //reactThis.setState({eventid: response.id, eventdate: response.eventdate, notes: response.notes});
                    // console.log(reactThis.state);
                    //reactThis.changeComponent("page5");
                }
            }
        };
        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("GET", `http://localhost:3000/matches/${thiseventid}`);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send();
    }

    getData(val) {
        console.log("in");
        console.log("pairs: ", val);
        let sender_ids=[];
        let recipient_ids=[];
        let event_ids=[];
        for(let i = 0; i < val.length; i++){
            sender_ids.push(val[i][0].id);
            recipient_ids.push(val[i][1].id);
            event_ids.push(this.state.eventid);
        }
        console.log(sender_ids);
        console.log(recipient_ids);

        var reactThis = this;

        var responseHandler = function() {
            console.log("in response handler: " + request.body);

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    // console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    // console.log(response.id);
                    // console.log(reactThis.state);
                    reactThis.changeComponent("page5");
                }
            }
        };

        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("POST", `http://localhost:3000/matches`);
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var obj = {sender_ids: sender_ids, recipient_ids: recipient_ids, event_ids: event_ids};
        console.log(obj);
        request.send(JSON.stringify(obj));
    }




  render(){
    console.log("in render");

    let main = "";
    if (this.state.currentComponent === "page1"){
        main = <Dashboard
        currentuser={this.state.user_id}
        handleCreateEvent={this.handleCreateEvent}
        upcomingevents={this.state.upcomingevents}
        pastevents={this.state.pastevents}
        matchedperson={this.state.matchedperson}
        allusers={this.state.allusers}
        handleDetailsClick={this.handleDetailsClick}
        allMatchesClick={this.allMatchesClick}
         />
    } else if (this.state.currentComponent === "page2"){
        main = <NewEvent
                handleName={this.handleName}
                handleNotes={this.handleNotes}
                handleEventdate={this.handleEventdate}
                handleEventSubmit={this.handleEventSubmit}
                changeComponent={this.changeComponent}>
            </NewEvent>
    } else if(this.state.currentComponent === "page3"){
        main = <AddUsers handleCheckBox={this.handleCheckBox} handleUsersSubmit={this.handleUsersSubmit} eventid={this.state.eventid} allusers={this.state.allusers} />
    } else if(this.state.currentComponent === "page4"){
        main = <Matching eventid={this.state.eventid} allusers={this.state.allusers} user_ids={this.state.user_ids} sendData={this.getData} />
    } else if(this.state.currentComponent === "page5"){
        main = <Eventdetails eventname={this.state.name} eventid={this.state.eventid} allusers={this.state.allusers} eventdate={this.state.eventdate} eventnotes={this.state.notes} matchedperson={this.state.matchedperson} />
    }


    return(<div>
            <h1>Secret Santa</h1>
            {main}
          </div>);
  }
}