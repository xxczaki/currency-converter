import React from 'react';
import dynamic from 'next/dynamic';

import Container from '../components/container';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Converter = dynamic(() => import('../components/converter'));

const Index = () => {
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
