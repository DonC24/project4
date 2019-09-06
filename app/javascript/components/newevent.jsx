import React from 'react';


class NewEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            eventdate: null,
            user_id: this.props.currentuser.id,
            eventid:''
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
            console.log("in response handler: " + request.body);

            if (request.readyState === 4) {
                if (request.status === 200) {
                    // console.log(request.response);
                    // console.log(request.responseText);
                    var response = JSON.parse( request.responseText );
                    // console.log(response.id);
                    reactThis.setState({eventid: response.id});
                    // console.log(reactThis.state);
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
    let userid = parseInt(this.props.currentuser.id);
    //console.log(typeof userid);
    return (
        <div>

                <p>Event Name:</p>
                <input name="name" type="text" onChange={(event) => {this.handleName(event)}} />
                <p>Event Date and time</p>
                <input name="eventdate" type="datetime-local" onChange={(event) => {this.handleEventdate(event)}}/>
                <input name="user_id" type="hidden" value={`${userid}`} />

                <button onClick={(event)=>{this.handleSubmit(event)}}>Submit</button>

        </div>
    );
  }
}


export default NewEvent;