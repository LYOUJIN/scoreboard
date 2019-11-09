import {ADD_PLAYER, CHANGE_SCORE, REMOVE_PLAYER} from "../actionTypes";

let maxId = 4;
const initialState = {
	players: [
		{name: 'LDK', score: 1, id: 1},
		{name: 'HONG', score: 2, id: 2},
		{name: 'KIM', score: 3, id: 3},
		{name: 'PARK', score: 4, id: 4},
	]
}

export const playerReducer = (state = initialState, action) => {
	//로직수행
	let players;
	switch (action.type) {
		case ADD_PLAYER:
			//NAME을 기존 PLAYERS에 추가하고 변경된 상태를 리턴
			players = [ ...state.players]
			players.push({id: ++maxId, name: action.name, score:0})
			return { ...state, players}
		case CHANGE_SCORE:
			players = state.players.map(player => {
				if(player.id === action.id) {
					player.score += action.delta;
				}
				return player;
			})
			return { ...state, players}
		case REMOVE_PLAYER:
			players.filter(player => player.id !== action.id)
			return { ...state, players}
	}

	return state;
}


