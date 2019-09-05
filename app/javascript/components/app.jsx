import React from 'react';

import NewEvent from './newevent';

export default class App extends React.Component{
    constructor() {
    super();
    this.state = {

    };
  }



  render(){
    const node = document.getElementById('currentuser')
    const data = JSON.parse(node.getAttribute('data'))
    console.log("inside app jsx " + data);
    console.log(data);
    return(<div>
            <h1>APPPPPPP!</h1>
            <NewEvent currentuser={data} />
          </div>);
  }
}