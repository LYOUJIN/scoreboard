import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {changeScore} from "../redux/action";

// function  컴포넌트를 class 컴포넌트로 전환
class Counter extends React.Component {
	incrementScore = (delta) => {
		console.log('increment: ', this);

		// this.state.score += 1; // => 안된다.
		this.props.changeScore(this.props.id, delta);
	}

	render() {
		return (
			<div className="counter">
				<button className="counter-action decrement" onClick={() => this.incrementScore(-1)}> - </button>
				<span className="counter-score">{this.props.score}</span>
				<button className="counter-action increment" onClick={() => this.incrementScore(1)}> + </button>
			</div>
		);
	}
}

Counter.properties = {
	id: PropTypes.number,
	score: PropTypes.number,
	changeScore: PropTypes.func
}



const mapActionToProps = (dispatch) => ({
	//왼쪽이 props, 오른쪽이 store의 state
	updateUser : (id,delta) => dispatch(changeScore(id,delta))
})

//HoC : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규컴포넌트를 리턴하는 펑션
//커링 펑션: 입력파라메터를 한꺼번에 넣는것이 아니라 차례대로 넣는 것.
export default connect(null, mapActionToProps)(Counter);


