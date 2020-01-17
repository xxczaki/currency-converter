import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import useSWR from 'swr';

import {fetcher} from '../utils/fetcher';

import Wrapper from './wrapper';
import Label from './label';
import Input from './input';
import SelectAddon from './select-addon';
import Select from './select';
import ButtonGroup from './button-group';
import Button from './button';

const options = [
	{value: 'AUD', label: '🇦🇺 Australian dollar'},
	{value: 'BRL', label: '🇧🇷 Brazilian real'},
	{value: 'BGN', label: '🇧🇬 Bulgarian lev'},
	{value: 'CAD', label: '🇨🇦 Canadian dollar'},
	{value: 'CNY', label: '🇨🇳 Chinese yuan'},
	{value: 'HRK', label: '🇭🇷 Croatian kuna'},
	{value: 'CZK', label: '🇨🇿 Czech koruna'},
	{value: 'DKK', label: '🇩🇰 Danish krone'},
	{value: 'EUR', label: '🇪🇺 Euro'},
	{value: 'USD', label: '🇺🇸 US dollar'},
	{value: 'HKD', label: '🇭🇰 Hong Kong dollar'},
	{value: 'HUF', label: '🇭🇺 Hungarian forint'},
	{value: 'ISK', label: '🇮🇸 Icelandic krona'},
	{value: 'INR', label: '🇮🇳 Indian rupee'},
	{value: 'IDR', label: '🇮🇩 Indonesian rupiah'},
	{value: 'ILS', label: '🇮🇱 Israeli shekel'},
	{value: 'JPY', label: '🇯🇵 Japanese yen'},
	{value: 'NOK', label: '🇳🇴 Norwegian krone'},
	{value: 'PLN', label: '🇵🇱 Polish zloty'},
	{value: 'GBP', label: '🇬🇧 Pound sterling'},
	{value: 'RON', label: '🇷🇴 Romanian leu'},
	{value: 'RUB', label: '🇷🇺 Russian rouble'},
	{value: 'KRW', label: '🇰🇷 South Korean won'},
	{value: 'MXN', label: '🇲🇽 Mexican peso'},
	{value: 'MYR', label: '🇲🇾 Malaysian ringgit'},
	{value: 'NZD', label: '🇳🇿 New Zealand dollar'},
	{value: 'PHP', label: '🇵🇭 Philippine peso'},
	{value: 'SGD', label: '🇸🇬 Singapore dollar'},
	{value: 'THB', label: '🇹🇭 Thai baht'},
	{value: 'ZAR', label: '🇿🇦 South African rand'},
	{value: 'SEK', label: '🇸🇪 Swedish krona'},
	{value: 'CHF', label: '🇨🇭 Swiss franc'},
	{value: 'TRY', label: '🇹🇷 Turkish lira'}
];

const Converter = () => {
	const {register, handleSubmit, reset, getValues, setValue} = useForm();
	const [result, setResult] = useState('');
	const {data, error} = useSWR('main', fetcher);

	const swap = () => {
		const values = getValues();

		if (values.to === undefined || values.from === undefined) {
			return;
		}

		setValue('from', values.to);
		setValue('to', values.from);
	};

	const onSubmit = async values => {
		// E.preventDefault();

		const {Cashify} = await import('cashify');
		const cashify = new Cashify({base: data.base, rates: data.rates});
		const result = cashify.convert(Number(values.amount), {from: values.from, to: values.to}).toFixed(3);

		setResult(`${values.amount} ${values.from} => ${result} ${values.to}`);

		if (error) {
			setResult(`Something went wrong: ${error}`);
		}
	};

	const resetState = () => {
		reset();
		setResult('');
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Label>
        Amount
					<Input ref={register({required: true})} type="number" min="1" step="any" pattern="[0-9]*" name="amount" placeholder="Amount"/>
				</Label>
				<Label>
        From
					<SelectAddon>
						<Select ref={register({required: true})} name="from">
							<option value="">Select</option>
							{options.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</Select>
						<Button type="button" onClick={() => swap()}>🔃</Button>
					</SelectAddon>
				</Label>
				<Label>
        To
					<Select ref={register({required: true})} name="to">
						<option value="">Select</option>
						{options.map(el => (
							<option key={el.value} value={el.value}>{el.label}</option>
						))}
					</Select>
				</Label>
				<ButtonGroup>
					<Button primary type="submit">
						Convert
					</Button>
					<Button
						reset type="reset" onClick={() => {
							resetState();
						}}
					>
						Reset
					</Button>
				</ButtonGroup>
				{result}
			</form>
		</Wrapper>
	);
};

export default Converter;
