import React from 'react';

import Moment from 'moment';

class Allpairs extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        let allpairs = this.props.allpairs;
        let allusers = this.props.allusers;
        let formatteddate = Moment(this.props.eventdate).utc().format("dddd, DD MMM YY, h:mm a");
        let pairslist = allpairs.map(apair => {
            console.log(apair);
            let sender = allusers.find(aperson => aperson.id === apair.sender_id);
            let recipient = allusers.find(aperson => aperson.id === apair.recipient_id);
            return(
                    <tr>
                        <td>{`${sender.name} (${sender.email})`}</td>
                        <td>{`${recipient.name} (${recipient.email})`}</td>
                    </tr>
                )
        })

    return (
        <div>
            <h2>All pairs for {this.props.eventname} at {formatteddate}</h2>
                <table>
                    <th>Gifter</th>
                    <th>Recipient</th>
                    <tbody>
                        {pairslist}
                    </tbody>
                </table>
        </div>
    );
  }
}


export default Allpairs;