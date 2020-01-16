import React from 'react';

import Main from '../components/main';
import Box from '../components/box';
import ExtLink from '../components/extlink';

const Index = () => {
	return (
		<Main>
			<Box>
				<p>This app uses the <ExtLink href="https://exchangeratesapi.io/">Exchange Rates API</ExtLink> for fast & reliable currency conversion.</p>
				<p>It is built using the latest technologies, such as <ExtLink href="https://reactjs.org/">React</ExtLink> and <ExtLink href="https://nextjs.org/">Next.js</ExtLink>.</p>
				<p>Did I mention it is also blazingly fast & works offline?</p>
				<p>If you enjoyed using this app, consider starring the project on <ExtLink href="https://github.com/xxczaki/currency-converter">Github</ExtLink> and supporting the author via <ExtLink href="https://patreon.com/akepinski/">Patreon</ExtLink>.</p>
			</Box>
		</Main>
	);
};

export default Index;
