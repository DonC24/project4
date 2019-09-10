import React from 'react';

class Matching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pairs: [],
        }

    }

    componentDidMount(){
        this.santamatch();

    }

    santamatch(){
        let selectedpeoplearr = [];
        let allusers = this.props.allusers;
        let participants = this.props.user_ids;
        for(let i = 0; i < allusers.length; i++){
            for(let j=0; j < participants.length; j++){
                if(allusers[i].id === parseInt(participants[j])){
                    // console.log(allusers[i].id === parseInt(participants[j]));
                    // console.log(allusers[i]);
                    selectedpeoplearr.push(allusers[i]);
                }
            }
        }
        console.log(selectedpeoplearr);

        let pairs = [];
        if (selectedpeoplearr.length > 1){
            selectedpeoplearr.sort(() => 0.5 - Math.random());
            pairs.push([selectedpeoplearr[selectedpeoplearr.length - 1], selectedpeoplearr[0]]);
            for (let i = 1; i < selectedpeoplearr.length; i++){
                pairs.push([selectedpeoplearr[i - 1], selectedpeoplearr[i]]);
            }
        }
        console.log(pairs);
        this.setState({pairs: pairs}, function() {
            this.wee()
        })
    }

    wee() {
        this.props.sendData(this.state.pairs);
    }


    render() {
        let pairs = this.state.pairs;
        let pairslist = pairs.map(apair => {
            console.log(apair);
            return(
                    <tr>
                        <td>{`${apair[0].name} (${apair[0].email})`}</td>
                        <td>{`${apair[1].name} (${apair[1].email})`}</td>
                    </tr>
                )
        })

    return (
        <div>
            <h2>{this.props.eventid}</h2>
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


export default Matching;