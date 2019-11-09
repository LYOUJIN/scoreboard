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
			<div className="row">
				{this.state.heroes.map(hero => (
					<div className="col-6 col-sm-4 col-md-3 p-1 p-sm-2 p-md-3" key={hero.id}>
						<div className="card">
							<img src={hero.photo ? hero.photo : process.env.PUBLIC_URL + '/images/face-24px.svg'}
									 style={{width: '100%'}} alt={hero.name}></img>
							<div className="card-body">
								<h5 className="card-title">{hero.name}</h5>
								<p className="card-text">email: {hero.email}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}      