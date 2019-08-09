import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';

const Navigation = dynamic(() => import('../components/navigation'));

const Converter = dynamic(
	() => import('../components/converter'),
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
