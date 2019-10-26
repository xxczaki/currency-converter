import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Information from '../components/information';

const About = (): JSX.Element => {
	return (
		<Container>
			<Header>About</Header>
			<Navigation/>
			<br/>
			<Information/>
		</Container>
	);
};

export default About;
