import App, {Container} from 'next/app';
import Head from 'next/head';
import React from 'react';
import {createGlobalStyle} from 'styled-components';

import '../node_modules/modern-normalize/modern-normalize.css';

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
		-webkit-font-smoothing: antialiased;
		text-rendering: optimizeSpeed;
	}
`;

class MyApp extends App {
	render(): JSX.Element {
		const {Component, pageProps} = this.props;

		return (
			<Container>
				<GlobalStyle/>
				<Head>
					<title>Currency Converter</title>
				</Head>
				<Component {...pageProps}/>
			</Container>
		);
	}
}

export default MyApp;
