import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Player from "./components/Player";
import AddPlayerForm from "./components/AddPlayerForm";
import {connect} from "react-redux";
import {CustomPlayer} from "./compoments/CustomPlayer";

let maxId = 4;

class App extends React.Component {

  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" players={this.state.players} />

        {/*Player's List*/}
        {
          this.state.players.map(player =>
            <CustomPlayer name={player.name} score={player.score} id={player.id} key={player.id}/>)
        }
        <AddPlayerForm></AddPlayerForm>
      </div>
    );
  }
 /* handleRemovePlayer(id) {
    // 삭제 로직
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => {
      const players = prevState.players.filter(player => player.id !== id);
      return {players};
    })
  }*/
}

const mapStateToProps = (state) => ({
  //왼쪽이 props, 오른쪽이 store의 state
  players: state.playerReducer.players
})


//HoC : 컴포넌트를 입력으로 넣어서 새로운 기능을 추가한 신규컴포넌트를 리턴하는 펑션
//커링 펑션: 입력파라메터를 한꺼번에 넣는것이 아니라 차례대로 넣는 것.
export default connect(mapStateToProps, null)(App);


