import React, {Component} from 'react'

class Palindrome extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            palindrome:''
        }
    }

    handleChange(prop,val){
        this.setState({
            [prop]: val
        })
    }

    handleClick(userInput) {
        let typed = userInput
        let reverse = userInput.split('').reverse().join('')
        if(typed === reverse){
            this.setState({
                palindrome: 'true'
            })
        }else {
            this.setState({
                palindrome: 'false'
            })
        }
    }

    render() {
        return(
            <div  className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
                <input 
                onChange={e => this.handleChange('userInput', e.target.value)} 
                className="inputLine" type="text"/>
                <button 
                onClick={()=>this.handleClick(this.state.userInput)}
                className="confirmationButton">CHECK</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome