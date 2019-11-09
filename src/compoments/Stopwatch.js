import React from 'react';

export class Stopwatch extends React.Component {

	tickRef;
	state = {
		isRunning: false,
		timer: 0
	};

	handleStopwatch() {

		this.setState(prevState => ({isRunning: !prevState.isRunning}))
	}

	handelReset(){
		this.setState({timer: 0})
	}

	render() {
		return (
			<div className="stopwatch">
				<h2>StopWatch</h2>
				<span className="stopwatch-time">{this.state.timer}</span>
				<button onClick={this.handleStopwatch.bind(this)}>
					{this.state.isRunning ? 'Stop' : 'Satart'}Start
				</button>
				<button onClick={this.handelReset.bind(this)}>Reset</button>
			</div>
		)
	}

	tick = () => {

		if(this.state.isRunning) {
			this.setState(prevSate=> ({time: prevSate.timer + 1}));
		}
	}

	//Dom이 렌더링 된 직후에 호출
	//jquery 스크롤바, 등 Dom과 관련된 메서드, 네트워크 호출 초기화
	componentDidMount() {

		this.tickRef = setInterval(this.tick, 1000);
	}

	//Dom이 파괴되기 직전에 호출
	componentWillMount() {

		clearInterval(this.tickRef);
	}

}



