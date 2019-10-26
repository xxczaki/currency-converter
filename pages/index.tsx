import React from 'react';

import Container from '../components/container';
import Header from '../components/header';
import Navigation from '../components/navigation';
import Converter from '../components/converter';

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
