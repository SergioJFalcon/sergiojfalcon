import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div className='home-container'>
				<h1>Sergio Falcon</h1>
				<h2>Web Developer</h2>

				<Link className='button' to='/portfolio'>
					Portfolio
				</Link>
				<Link className='button' to='/table'>
					Table
				</Link>
				<h1>ABOUT ME</h1>
				<span>
					Currently based in Austin, TX. Web Developer striving to become a full-stack developer.
				</span>
				<h1>Skills</h1>
				<span>HTML/CSS/JavaScript <br />
				ReactJS & React Native <br />
				Java, C, Python <br />
				</span>
			</div>
		)
	}
}

export default Home;