import React from 'react';
import {addPlayer} from "../redux/actions";
import {connect} from "react-redux";

class AddPlayerForm extends React.Component {
	textInput = React.createRef();

	handleSubmit(e) {
		e.preventDefault();

		const player = document.getElementById('player');
		if (!player.validity.valid) {
			alert('player is not valid');
			return;
		}

		this.props.addPlayer(this.textInput.current.value);
		// 폼 초기화
		e.currentTarget.reset();
	}

	render() {
		return (
			<form className="form" onSubmit={this.handleSubmit.bind(this)} noValidate>
				<input id="player" className="input" type="text" placeholder="enter a player's name" required
							 ref={this.textInput} />
				<input className="input" type="submit" value="Add Player"></input>
			</form>
		);
	}
}

const mapActionToProps = (dispatch) => ({
	// 왼쪽은 props, 오른쪽이 (액션을 디스패치하는) 펑션
	addPlayer: (name) => dispatch(addPlayer(name))
})

export default connect(null, mapActionToProps)(AddPlayerForm);
