import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Converter = dynamic(
	async () => import('../components/converter'),
	{
		loading: () => <p>Loading...</p>
	}
);

const Index = (): JSX.Element => {
	return (
		<Container>
			<Header>Currency Converter</Header>
			<Navigation/>
			<br/>
			<br/>
			<Converter/>
		</Container>
	);
};

export default Index;
