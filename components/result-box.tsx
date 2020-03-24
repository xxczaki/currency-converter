import React from 'react';
import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	Link
} from '@chakra-ui/core';

interface Props {
	amount: number;
	from: string;
	to: string;
	result: string;
}

const ResultBox = ({amount, from, to, result}: Readonly<Props>): JSX.Element => (
	<Stat textAlign="left">
		<StatLabel>{amount} {from} equals</StatLabel>
		<StatNumber>{result} {to}</StatNumber>
		<StatHelpText>
			<Link isExternal href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html">Data provided by the European Central Bank</Link>
		</StatHelpText>
	</Stat>
);

export default ResultBox;
