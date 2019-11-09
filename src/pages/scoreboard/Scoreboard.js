import React from 'react'
import styles from './Scoreboard.module.css';
import {connect} from "react-redux";
import {Header} from "../../compoments/Header";
import {CustomPlayer} from "../../compoments/CustomPlayer";
import AddPlayerForm from "../../compoments/AddPlayerForm";

class Scoreboard extends React.Component {


	getHighScore() {
		let highScore = 0;
		this.props.players.forEach(player => {
			if(player.score > highScore) {
				highScore = player.score;
			}
		})
		return highScore > 0 ? highScore : null;
	}

	render() {
		return (
			<div className={styles.scoreboard}>
				<Header players={this.state.players} />
				{
					this.state.players.map(player =>
						<CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}
													isHightScore={this.getHighScore() === player.score}/>)

				}
				<AddPlayerForm></AddPlayerForm>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	//왼쪽이 props, 오른쪽이 store의 state
	players: state.playerReducer.players
})


//HoC : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규컴포넌트를 리턴하는 펑션
//커링 펑션: 입력파라메터를 한꺼번에 넣는것이 아니라 차례대로 넣는 것.
export default connect(mapStateToProps, null)(Scoreboard);

