import React from 'react';

import NewEvent from './newevent';
import AddUsers from './addusers';

export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            currentComponent: "page1"
        };
        this.changeComponent = this.changeComponent.bind(this);
    }

    changeComponent(input){
        console.log(input);
        console.log(this);
        this.setState({currentComponent: input});

    }


  render(){
    const node = document.getElementById('currentuser');
    const data = JSON.parse(node.getAttribute('data'));
    console.log("inside app jsx " + data);
    console.log(data);


    let main = "";
    if (this.state.currentComponent === "page1"){
        main = <NewEvent currentComponent={this.state.currentComponent} currentuser={data} changeComponent={this.changeComponent} />
    }



    return(<div>
            <h1>APPPPPPP!</h1>
            {main}
          </div>);
  }
}