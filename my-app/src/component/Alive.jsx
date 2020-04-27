import React from 'react';

class Alive extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0
        }
    }

    componentDidMount() {
        this.timerInterval = setInterval(() => {
            this.setState({ time: this.state.time + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    render() {
        const { time } = this.state;
        return (
            <p>
                <div>Hello</div>
                <span> {time >= 1 && <h1>I'm alive</h1>}</span>
            </p>
        )
    }
}

export default Alive;
