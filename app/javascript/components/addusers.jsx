import React from 'react';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);

    }





  render() {

    let alluserslist = this.props.allusers;

    let userslist = alluserslist.map(oneuser => {
                      return(
                        <div>
                            <label for={`${oneuser.name}`}>{`${oneuser.name}`}</label>
                            <input className="form-checkbox"
                                  id = {`${oneuser.name}`}
                                  name={`${oneuser.name}`}
                                  onChange="changefunc"
                                  value={`${oneuser.id}`}
                                  //checked={ props.selectedOptions.indexOf(option) > -1 }
                                  type="checkbox" />
                        </div>
                        )
                  });

    return (
        <div>

                <p>Add Participants:</p>
                <label className="form-label">Add participants</label>
                    <div className="checkbox-group">
                        {userslist}
                    </div>
                <button onClick={(event)=>{this.handleUsersSubmit(event)}}>Submit</button>
        </div>
    );
  }
}


export default AddUsers;