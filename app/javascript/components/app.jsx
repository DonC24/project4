import React from 'react';

import NewEvent from './newevent';
import AddUsers from './addusers';

export default class App extends React.Component{
    constructor() {
        super();

        this.state = {
            currentComponent: "page1",
            name: '',
            eventdate: null,
            user_id: null,
            eventid:'',
            emaildom: null,
            allusers: []
        };
        this.changeComponent = this.changeComponent.bind(this);
        this.handleEventSubmit = this.handleEventSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEventdate = this.handleEventdate.bind(this);
        this.handleUsersSubmit = this.handleUsersSubmit.bind(this);
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

        // console.log(this.state);

        const allusersdiv = document.getElementById('allusers');
        var allusersjson = JSON.parse(allusersdiv.getAttribute('data'));
        console.log(allusersjson);
        this.setState({ user_id: userid, emaildom: emaildom, allusers: allusersjson});
        console.log("this state allusers");
        console.log(this.state);

        let alluserslist = this.state.allusers

    }

    changeComponent(input){
        console.log(input);
        console.log(this);
        this.setState({currentComponent: input});
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
                    reactThis.changeComponent("page2");
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




  render(){
    console.log("in render");

    let main = "";
    if (this.state.currentComponent === "page1"){
        main = <NewEvent
                handleName={this.handleName}
                handleEventdate={this.handleEventdate}
                handleEventSubmit={this.handleEventSubmit}
                changeComponent={this.changeComponent}>
            </NewEvent>
    } else if(this.state.currentComponent === "page2"){
        main = <AddUsers handleUsersSubmit={this.handleUsersSubmit} eventid={this.state.eventid} allusers={this.state.allusers} />
    }


    return(<div>
            <h1>APPPPPPP!</h1>
            {main}
          </div>);
  }
}