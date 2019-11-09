import React from 'react';
import PropTypes from 'prop-types';
import {removePlayer} from "../redux/action";
import {connect} from "react-redux";

class Player extends React.Component {

	static propsType = {
		name: PropTypes.string,
		id: PropTypes.number,
		score: PropTypes.number,
		removePlayer: PropTypes.func
	}

	render() {
	console.log(this.props.name, 'is renderd');

	const {removePlayer, id,name, score, changeScore} = this.props;

		return (
			<div className="player">
				<span className="player-name">
					<button className="remove-player" onClick={() => removePlayer(id)}> x </button>
					{name}
				</span>

			</div>
		)
	};

	shouldComponentUpdate(nextProps, nextState, nextContext) {
		//기존 score와 nextProps의 score가 다르면 true
			return this.props.score !== nextProps.score ? true : false;
		}
};

const mapActionToProps = (dispatch) => ({
	//왼쪽은 props, 오른쪽이 (액션을 디스패치하는) 펑션
	removePlayer: (id) => dispatch(removePlayer(id))
})

//HoC : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규컴포넌트를 리턴하는 펑션
//커링 펑션: 입력파라메터를 한꺼번에 넣는것이 아니라 차례대로 넣는 것.
export default connect(null, mapActionToProps)(Player);
