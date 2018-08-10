import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds:0
        }
    }

    componentDeadline() {
        this.getTimeUntil(this.props.deadline);
    }

    componentInterval() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    getTimeUntil(deadline) {
        var time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time/1000)%60);
        const minutes = Math.floor((time/1000/60)%60);
        const hours = Math.floor(time/(1000*60*60) %24);
        const days = Math.floor(time/(1000*60*60*24));

        this.setState({days, hours, minutes, seconds});
    }

    render() {
        return (
           <div className="App-squares">
               <div className="App-days">{this.state.days} days</div>
               <div className="App-hours">{this.state.hours} hours</div>
               <div className="App-minutes">{this.state.minutes} minutes</div>
               <div className="App-seconds">{this.state.seconds} seconds</div>
           </div>
        )
    }
}
export default Clock;