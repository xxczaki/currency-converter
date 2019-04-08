import React from 'react';

import ExternalLink from './link';

const Information = () => (
	<>
		<p>This app uses the <ExternalLink href="https://exchangeratesapi.io/">Exchange Rates API</ExternalLink> for fast & reliable currency conversion.</p>
		<p>It is built using the latest technologies, such as <ExternalLink href="https://reactjs.org/">React</ExternalLink> and <ExternalLink href="https://nextjs.org/">Next.js</ExternalLink>.</p>
		<p>Did I mention it is also blazingly fast & works offline?</p>
		<br/>
		<br/>
		<p>If you enjoyed using this app, consider starring the project on <ExternalLink href="https://github.com/xxczaki/currency-converter">Github</ExternalLink> and supporting the author via <ExternalLink href="https://patreon.com/akepinski/">Patreon</ExternalLink>.</p>
	</>
);

export default Information;
