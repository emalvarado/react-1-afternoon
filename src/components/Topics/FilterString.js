import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();

        this.state = {
            names: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: '',
            filteredNames: []
        }
    }

    updateUserInput(event){
        this.setState({
            userInput: event.target.value
        })
    }

    filterString(){
        const remainingNames = this.state.names.filter((name)=>{
            if(name.includes(this.state.userInput)){
                return true;
            }
            return false;
        });
        this.setState({
            filteredNames: remainingNames
        })
    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4> Filter String </h4>
                <span className="puzzleText"> Names: {JSON.stringify(this.state.names)}  </span>
                <input className="inputLine" onChange={(event)=>this.updateUserInput(event)}></input>
                <button className="confirmationButton" onClick={() => this.filterString(this.state.userInput)}> Filter </button>
                <span className="resultsBox filterStringRB"> Filtered Names: 
                {JSON.stringify(this.state.filteredNames)} </span>
            </div>
        )
    }
}

export default FilterString