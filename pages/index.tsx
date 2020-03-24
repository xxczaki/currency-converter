import React, {useState, useEffect} from 'react';
import {NextPage, GetServerSideProps} from 'next';
import dynamic from 'next/dynamic';
import {useForm, Controller} from 'react-hook-form';
import useSWR from 'swr';
import {
	Heading,
	Stack,
	Box,
	Text,
	FormControl,
	FormLabel,
	Input,
	Button,
	Spinner
} from '@chakra-ui/core';
import {Cashify} from 'cashify';
import currency from 'currency.js';

import {fetcher, ResponseObject} from '../utils/fetcher';
import {options, customStyles} from '../utils/select';

import Container from '../components/container';

const Select = dynamic(
	async () => import('react-select'),
	{
		ssr: false,
		loading: () => null
	}
);

const ResultBox = dynamic(
	async () => import('../components/result-box'),
	{loading: () => <Spinner/>}
);

interface Props {
	data: ResponseObject;
}

interface FormData {
	amount: number;
	from: {
		value: string;
		label: string;
	};
	to: {
		value: string;
		label: string;
	};
}

interface Result {
	amount: number;
	from: string;
	to: string;
	result: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await fetcher();
	return {props: {data}};
};

const Index: NextPage<Props> = (props: Readonly<Props>) => {
	const initialData = props.data;

	const [result, setResult] = useState<Result | undefined>(undefined);
	const {register, control, watch, getValues, setValue} = useForm<FormData>();
	const {data} = useSWR('main', fetcher, {initialData});

	const amountValue = watch('amount');
	const fromValue = watch('from');
	const toValue = watch('to');

	useEffect(() => {
		const {amount, from, to} = watch();
		console.log(from);

		if ((!amount || !from || !to) && !result) {
			return;
		}

		const cashify = new Cashify({base: 'EUR', rates: data?.rates});
		const output = cashify.convert(Number(amount), {from: from?.value, to: to?.value});

		setResult({
			amount,
			from: from?.value,
			to: to?.value,
			result: currency(output).format()
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [amountValue, fromValue, toValue]);

	const swap = (): void => {
		const {from, to} = getValues();

		if (!to || !from) {
			return;
		}

		setValue('from', to);
		setValue('to', from);
	};

	return (
		<Container>
			<Stack spacing={3}>
				<Heading textAlign="center">Currency Converter</Heading>
				<FormControl>
					<FormLabel htmlFor="amount">Amount</FormLabel>
					<Input
						ref={register({required: true})}
						type="number"
						min="1"
						step="any"
						pattern="[0-9]*"
						name="amount"
						placeholder="Amount"
					/>
				</FormControl>
				<FormControl>
					<FormLabel htmlFor="from">From</FormLabel>
					<Controller as={Select} name="from" control={control} styles={customStyles} options={options}/>
				</FormControl>
				<Button leftIcon="repeat" variant="ghost" onClick={() => swap()}>Swap</Button>
				<FormControl>
					<FormLabel htmlFor="to">To</FormLabel>
					<Controller as={Select} name="to" control={control} styles={customStyles} options={options}/>
				</FormControl>
				<Box borderWidth="1px" rounded="lg" padding={10} textAlign="center">
					{result?.result && result.amount ?
						<ResultBox
							amount={result.amount}
							from={result.from}
							to={result.to}
							result={result.result}
						/>							:
						<Text>Result will appear here</Text>}
				</Box>
			</Stack>
		</Container>
	);
};

export default Index;
