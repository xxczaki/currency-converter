import React from 'react';
import Link from 'next/link';

import Container from '../components/container';
import Header from '../components/header';
import ExternalLink from '../components/link';
import Converter from '../components/converter';

const Index = () => {
	return (
		<Container>
			<Header>Currency Converter</Header>
			<p style={{margin: '2px'}}><Link prefetch href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link prefetch href="/about"><ExternalLink>[About]</ExternalLink></Link></p>
			<br/>
			<br/>
			<Converter/>
		</Container>
	);
};

export default Index;
