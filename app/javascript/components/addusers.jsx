import React from 'react';

class AddUsers extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {

    let alluserslist = this.props.allusers;
    var ReactThis = this;

    let userslist = alluserslist.map(oneuser => {
        // console.log(typeof oneuser.id);
                      return(
                        <div class="form-group form-check">

                            <input className="form-check-input"
                                  id = {`${oneuser.name}`}
                                  name={`${oneuser.name}`}
                                  onChange={(event)=>{this.props.handleCheckBox(event)}}
                                  value={`${oneuser.id}`}
                                  type="checkbox" />
                            <label className="form-check-label" htmlFor={`${oneuser.name}`}>{`${oneuser.name}`}</label>
                        </div>
                        )
                  });

    return (
        <div className="form-group col-6">
                <h4>Add participants</h4>
                    <div className="checkbox-group">
                        {userslist}
                    </div>
                <button className="btn btn-primary" onClick={(event)=>{this.props.handleUsersSubmit(event)}}>Submit Participants</button>
        </div>
    );
  }
}


export default AddUsers;