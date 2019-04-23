import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent.js';
import KeyPadComponent from "./KeyPadComponent.js";

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        //let checkResult = ''
        //checkResult = this.state.result

        try {
            this.setState({
                result: "Sorry. Your Numbers Don't Match. You lose 10 points. Play Again to win them back!",
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    render() {
        return (
            <div className= "App">
                <div className="calculator-body">
                    <h1>Pick 3 Lottery</h1>
                    <h3>Select 3 Numbers from 0 to 9</h3> 
                    <h3>If your numbers match the house, you win 100 Points!</h3>
                    <KeyPadComponent onClick={this.onClick}/>
                    <ResultComponent result={this.state.result}/>
                </div>
            </div>
        );
    }
}

export default App;
