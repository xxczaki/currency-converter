import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';

const Navigation = dynamic(async () => import('../components/navigation'));

const Information = dynamic(
	async () => import('../components/information'),
	{
		loading: () => <p>Loading...</p>
	}
);

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
