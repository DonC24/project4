import React from 'react';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {

    let alluserslist = this.props.allusers;
    var ReactThis = this;

    let userslist = alluserslist.map(oneuser => {
        console.log(typeof oneuser.id);
                      return(
                        <div>
                            <label htmlFor={`${oneuser.name}`}>{`${oneuser.name}`}
                            <input className="form-checkbox"
                                  id = {`${oneuser.name}`}
                                  name={`${oneuser.name}`}
                                  onChange={(event)=>{this.props.handleCheckBox(event)}}
                                  value={`${oneuser.id}`}
                                  type="checkbox" />
                            </label>
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
                <button onClick={(event)=>{this.props.handleUsersSubmit(event)}}>Submit Participants</button>
        </div>
    );
  }
}


export default AddUsers;