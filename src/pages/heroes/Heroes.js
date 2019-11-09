import React from 'react';
import api from '../../utils/api';

import './Heroes.scss';

export class Heroes extends React.Component {
	state = {
		heroes: []
	}

	componentDidMount() {

		this.getHeroes();
	}


	//aysn
	//await는 반드시 뒤에 Promise가 오고, Promise가 올떄까지 기다렸다가.
	//리턴된 결과를 반환한다.
	async getHeroes() {
		const body = await await api.get('/api/user/heroes?start')
		this.setState({heroes: body.data.data});
	}


	render() {
		return (
			<ul className="img-box">
				{
					this.state.heroes.map(hero => (
						<li key={hero.id} className="row align-items-center m-0">
							<div className="col-1 py-2">
								<img src={hero.photo ? hero.photo:process.env.PUBLIC_URL + '/images/face-24px.svg'}
										 alt={hero.name} className="img-fluid rounded-circle" />
							</div>
							<span className="col">{hero.name}</span>
						</li>
					))
				}
			</ul>
		);
	}
}      