import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
        };
    }

    ifclick = () => {
        this.setState({ status: !this.state.status })
    }

    render() {
        return (
            <div class="custom-control custom-checkbox">
                <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultUnchecked"
                    onClick={this.ifclick}
                ></input>
                {this.state.status && <Timer />}
            </div>
        );
    }
}

class Timer extends React.Component {
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

export default Checkbox;
