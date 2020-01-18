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

const majors = [
	{value: 'USD', label: 'US Dollar (USD)'},
	{value: 'GBP', label: 'UK Pound (GBP)'},
	{value: 'EUR', label: 'Euro (EUR)'},
	{value: 'AUD', label: 'Australian Dollar (AUD)'},
	{value: 'CAD', label: 'Canadian Dollar (CAD)'},
	{value: 'CNY', label: 'Chinese Yuan Renminbi (CNY)'},
	{value: 'JPY', label: 'Japanese Yen (JPY)'},
	{value: 'CHF', label: 'Swiss Franc (CHF)'}
];

const europe = [
	{value: 'BGN', label: 'Bulgarian Lev (BGN)'},
	{value: 'HRK', label: 'Croatian Kuna (HRK)'},
	{value: 'CZK', label: 'Czech Koruna (CZK)'},
	{value: 'DKK', label: 'Danish Krone (DKK)'},
	{value: 'EUR', label: 'Euro (EUR)'},
	{value: 'HUF', label: 'Hungarian Forint (HUF)'},
	{value: 'ISK', label: 'Icelandic Krona (ISK)'},
	{value: 'NOK', label: 'Norwegian Krone (NOK)'},
	{value: 'PLN', label: 'Polish New Zloty (PLN)'},
	{value: 'RON', label: 'Romanian Leu (RON)'},
	{value: 'RUB', label: 'Russian Ruble (RUB)'},
	{value: 'SEK', label: 'Swedish Krona (SEK)'},
	{value: 'CHF', label: 'Swiss Franc (CHF)'},
	{value: 'TRY', label: 'Turkish Lira (TRY)'},
	{value: 'GBP', label: 'UK Pound (GBP)'}
];

const americas = [
	{value: 'BRL', label: 'Brazilian Real (BRL)'},
	{value: 'CAD', label: 'Canadian Dollar (CAD)'},
	{value: 'MXN', label: 'Mexican New Peso (MXN)'},
	{value: 'USD', label: 'US Dollar (USD)'}
];

const africa = [
	{value: 'ZAR', label: 'South African Rand (ZAR)'}
];

const asia = [
	{value: 'CNY', label: 'Chinese Yuan Renminbi (CNY)'},
	{value: 'HKD', label: 'Hong Kong Dollar (HKD)'},
	{value: 'INR', label: 'Indian Rupee (INR)'},
	{value: 'IDR', label: 'Indonesian Rupiah (IDR)'},
	{value: 'ILS', label: 'Israeli Shekel (ILS)'},
	{value: 'JPY', label: 'Japanese Yen (JPY)'},
	{value: 'MYR', label: 'Malaysian Ringgit (MYR)'},
	{value: 'PHP', label: 'Philippine Peso (PHP)'},
	{value: 'SGD', label: 'Singapore Dollar (SGD)'},
	{value: 'KRW', label: 'South Korean Won (KRW)'},
	{value: 'THB', label: 'Thai Baht (THB)'}
];

const oceania = [
	{value: 'AUD', label: 'Australian Dollar (AUD)'},
	{value: 'NZD', label: 'New Zealand Dollar (NZD)'}
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
				<SelectAddon>
					<Label>
        From
						<Select ref={register({required: true})} name="from">
							<option value="">Select</option>
							<optgroup label="Majors">
								{majors.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
							<optgroup label="Europe">
								{europe.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
							<optgroup label="Americas">
								{americas.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
							<optgroup label="Africa">
								{africa.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
							<optgroup label="Asia">
								{asia.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
							<optgroup label="Oceania">
								{oceania.map(el => (
									<option key={el.value} value={el.value}>{el.label}</option>
								))}
							</optgroup>
						</Select>
					</Label>
					<Button type="button" onClick={() => swap()}>🔃</Button>
				</SelectAddon>
				<Label>
        To
					<Select ref={register({required: true})} name="to">
						<option value="">Select</option>
						<optgroup label="Majors">
							{majors.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
						<optgroup label="Europe">
							{europe.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
						<optgroup label="Americas">
							{americas.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
						<optgroup label="Africa">
							{africa.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
						<optgroup label="Asia">
							{asia.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
						<optgroup label="Oceania">
							{oceania.map(el => (
								<option key={el.value} value={el.value}>{el.label}</option>
							))}
						</optgroup>
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
