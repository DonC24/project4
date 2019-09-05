import React from 'react';


class NewEvent extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        console.log("button clicked");
        var reactThis = this;
        console.log(formToken);

        var responseHandler = () => {
            console.log("in response handler: " + request.body);
              var response = JSON.parse( this.responseText );
              // reactThis.setState({stuff: response});
        };

        var request = new XMLHttpRequest();
        request.addEventListener("load", responseHandler);
        request.open("POST", "http://localhost:3000/events");
        request.send();
    }



  render() {
    return (
        <form action="http://localhost:3000/events" method="post">

                <p>Event Name:</p>
                <input name="name" type="text" />
                <p>Event Date and time</p>
                <input name="eventdate" type="datetime-local" />


                <button type="submit" onSubmit={(event)=>{this.handleSubmit(event)}}>Submit</button>

        </form>
    );
  }
}


export default NewEvent;