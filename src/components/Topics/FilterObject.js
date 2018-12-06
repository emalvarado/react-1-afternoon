import React, { Component } from 'react'

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: [{
                name: 'Lily',
                age: 28
            },
            {
                name: 'Ashley',
                // age: 30
            }
            ],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val){
        this.setState({
            userInput: val
        })
    }

    filterArray(prop) {
        let unfilteredArray = this.state.unfilteredArray;
        let filteredArray = [];

        for(let i=0; i< unfilteredArray.length;i++){
            if(unfilteredArray[i].hasOwnProperty(prop)){
                filteredArray.push(unfilteredArray[i]);
            }
        }
        this.setState({filteredArray: filteredArray})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4> Filter Object</h4>
                <span className='puzzlText'>Original: {JSON.stringify(this.state.unfilteredArray)}</span>
                <input className='inputLine' onChange={(e)=> this.handleChange(e.target.value)}/>
                <button className='confirmationButton' onClick={()=> this.filterArray(this.state.userInput)}>FILTER</button>
                <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterObject