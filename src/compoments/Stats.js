import React from 'react';

export const Stats = (props) => {
	const totalPlayers = props.players.length;
	let totalScore = 0;
	props.players.forEach(players => totalScore += players.score);

	return (
		<table className="stats">
			<tbody>
			<tr>
				<td>Player :</td>
				<td>{totalPlayers}</td>
			</tr>
			<tr>
				<td>Total Players:</td>
				<td>{totalScore}</td>
			</tr>
			</tbody>
		</table>
	);
}