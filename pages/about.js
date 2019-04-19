import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Link from 'next/link';

import Container from '../components/container';
import Header from '../components/header';
import ExternalLink from '../components/link';
import Information from '../components/information';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #212121;
        font-family: monospace;
        margin: auto;
        width: 80%;
        font-size: 16px;
        padding-top: 50px;
        padding-bottom: 100px;
        color: #fff;
        line-height: 18pt;
        -webkit-font-smoothing: antialiased;
        -webkit-touch-callout: none;
        text-rendering: optimizeSpeed;
    }

    p {
        margin: 2px;
    }
`;

const Index = () => {
	return (
		<Container>
			<Header>About</Header>
			<p><Link prefetch href="/"><ExternalLink>[Home]</ExternalLink></Link> &bull; <Link prefetch href="/about"><ExternalLink>[About]</ExternalLink></Link></p>
			<br/>
			<Information/>
			<GlobalStyle/>
		</Container>
	);
};

export default Index;
