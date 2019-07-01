import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Information = dynamic(
	() => import('../components/information'),
	{
		loading: () => <p>Loading...</p>
	}
);

const Index = () => {
	return (
		<Container>
			<Header>About</Header>
			<Navigation/>
			<br/>
			<Information/>
		</Container>
	);
};

export default Index;
