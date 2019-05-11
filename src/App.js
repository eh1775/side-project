import React, { Component } from 'react';
import './App.css';
import ResultComponent from './ResultComponent.js';
import KeyPadComponent from "./KeyPadComponent.js";

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            result: "",
        }
    }

    onClick = button => {
        //counter for button
        this.increment()
        //if button count is 5 reset
        if(this.state.count > 3){
            this.reset()
        }
        else if(button === "play"){
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

    increment = () => {
        this.setState({ 
            count: this.state.count+1
        });
    }
    calculate = () => {
        let rand = this.randomCalc()
        this.setState({
            result: "Sorry. The number sequence is: " + rand + ". You lose 10 points. Play Again to win them back!"
        })
    };

    randomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    randomCalc = () => {
        let randomlist= [];
        for(let i = 0; i < 3; i++){
            let num = this.randomInt(0,10);
            randomlist.push(num);
        }
        console.log(randomlist)
        return randomlist;

    }

    reset = () => {
        this.setState({
            count: 0,
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
