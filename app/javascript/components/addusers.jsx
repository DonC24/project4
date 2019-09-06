import React from 'react';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    const node = document.getElementById('allusers');
    const data = JSON.parse(node.getAttribute('data'));
    console.log("inside addusers jsx");
    console.log(data);

    return (
        <div>

                <p>Add Participants:</p>
                {/*<input name="user" type="text" />
                <input name="eventdate" type="datetime-local" />
                <input name="user_id" type="hidden" value={`${userid}`} />*/}
                <button onClick={(event)=>{this.handleSubmit(event)}}>Submit</button>
        </div>
    );
  }
}


export default AddUsers;