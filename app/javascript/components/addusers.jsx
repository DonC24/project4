import React from 'react';


class AddUsers extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){
        console.log("button clicked");
        var reactThis = this;

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
        <div>
            <form>
                <p>Add Participant's email:</p>
                <input name="user" type="text" />
                <input name="eventdate" type="datetime-local" />
                <input name="user_id" type="hidden" value={`${userid}`} />

                <button onClick={(event)=>{this.handleSubmit(event)}}>Submit</button>
            </form>
        </div>
    );
  }
}


export default AddUsers;