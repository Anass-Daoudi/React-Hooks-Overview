import React from 'react';

const withAsyncIncCounter = WrappedComponent => class extends React.Component {
    intervalId;

    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return <WrappedComponent counter={this.state.counter} />;
    }

    componentDidMount() {
        this.intervalId = window.setInterval(() => {
            this.setState(({ counter }) => ({ counter: counter + 1 }));
        }, 1000);
        console.log('mounted', this.intervalId);
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
        console.log('unmounted', this.intervalId);
    }
};

const A = ({ counter }) => (
    <p>A counter:{counter}</p>
);

const B = ({ counter }) => (
    <p>B counter:{counter}</p>
);

class AsyncIncCounterWithHOCExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }
    }

    render() {
        const AWithAsyncIncCounter = withAsyncIncCounter(A);
        const BWithAsyncIncCounter = withAsyncIncCounter(B);

        return (
            <React.Fragment>
                <button
                    onClick={() => this.setState(({ show }) => ({ show: !show }))}
                >
                    {this.state.show ? 'Stop ' : 'Start '}
                    Async Inc Counters Using HOC
                </button>
                {
                    this.state.show && (
                        <React.Fragment>
                            <AWithAsyncIncCounter />
                            <BWithAsyncIncCounter />
                        </React.Fragment>
                    )
                }
            </React.Fragment>
        );

    }
}

export default AsyncIncCounterWithHOCExample;