import React from 'react';

import AddUsers from './addusers';

class NewEvent extends React.Component {
    constructor(props) {
        super(props);
        let useremail = this.props.currentuser.email;
        var emailarr = useremail.split("@");
        let emaildom = emailarr[1];
        console.log(emaildom);
        this.state = {
            currentComponent: this.props.currentComponent,
            name: '',
            eventdate: null,
            user_id: this.props.currentuser.id,
            eventid:'',
            emaildom: emaildom
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEventdate = this.handleEventdate.bind(this);
    }

    handleName(event){
        let input = event.target.value;
        this.setState({name: input});
        console.log(this.state);
    }

    handleEventdate(event){
        console.log("in handle eventdate");
        let input = event.target.value;
        console.log(typeof event.target.value)
        this.setState({eventdate: event.target.value});
        console.log(this.state);
    }

    handleSubmit(event){
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
                    reactThis.props.changeComponent("page2");
                }
            }
        };

        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("POST", "http://localhost:3000/events");
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        request.send(JSON.stringify(this.state));
    }


  render() {
    //console.log("in newevent: ");
    //console.log(this.props.currentuser);
    //console.log(typeof userid);
    let main = "";
    if(this.state.currentComponent != "page1"){
        main = <AddUsers eventid={this.state.eventid} emaildom={this.state.emaildom} />
    }


    return (
        <div>
            <p>Event Name:</p>
            <input name="name" type="text" onChange={(event) => {this.handleName(event)}} />
            <p>Event Date and time</p>
            <input name="eventdate" type="datetime-local" onChange={(event) => {this.handleEventdate(event)}}/>
            <button onClick={(event)=>{this.handleSubmit(event)}}>Submit</button>
            {main}
        </div>
    );
  }
}


export default NewEvent;