import React, {useState} from 'react';
import {useFormState} from 'react-use-form-state';
import useSWR from 'swr';

import {fetcher} from '../utils/fetcher';

import Wrapper from './wrapper';
import Label from './label';
import Input from './input';
import SelectAddon from './select-addon';
import Select from './select';
import ButtonGroup from './button-group';
import Button from './button';

const Converter = () => {
	const [formState, {number, select}] = useFormState();
	const [result, setResult] = useState('');
	const {data, error} = useSWR('main', fetcher);

	const swap = () => {
		const {values} = formState;

		if (values.to === undefined || values.from === undefined) {
			return;
		}

		formState.setField('from', values.to);
		formState.setField('to', values.from);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		const {values} = formState;

		const {Cashify} = await import('cashify');
		const cashify = new Cashify({base: data.base, rates: data.rates});
		const result = cashify.convert(Number(values.amount), {from: values.from, to: values.to}).toFixed(3);

		setResult(`${values.amount} ${values.from} => ${result} ${values.to}`);

		if (error) {
			setResult(`Something went wrong: ${error}`);
		}
	};

	const resetState = () => {
		formState.clear();
		setResult('');
	};

	return (
		<Wrapper>
			<form onSubmit={handleSubmit}>
				<Label>
        Amount
					<Input required {...number('amount')} type="number" min="1" step="any" pattern="[0-9]*" name="amount" placeholder="Amount"/>
				</Label>
				<Label>
        From
					<SelectAddon>
						<Select required {...select('from')}>
							<option value="">Select</option>
							<option value="AUD">🇦🇺 Australian dollar</option>
							<option value="BRL">🇧🇷 Brazilian real</option>
							<option value="BGN">🇧🇬 Bulgarian lev</option>
							<option value="CAD">🇨🇦 Canadian dollar</option>
							<option value="CNY">🇨🇳 Chinese yuan</option>
							<option value="HRK">🇭🇷 Croatian kuna</option>
							<option value="CZK">🇨🇿 Czech koruna</option>
							<option value="DKK">🇩🇰 Danish krone</option>
							<option value="EUR">🇪🇺 Euro</option>
							<option value="USD">🇺🇸 US dollar</option>
							<option value="HKD">🇭🇰 Hong Kong dollar</option>
							<option value="HUF">🇭🇺 Hungarian forint</option>
							<option value="ISK">🇮🇸 Icelandic krona</option>
							<option value="INR">🇮🇳 Indian rupee</option>
							<option value="IDR">🇮🇩 Indonesian rupiah</option>
							<option value="ILS">🇮🇱 Israeli shekel</option>
							<option value="JPY">🇯🇵 Japanese yen</option>
							<option value="NOK">🇳🇴 Norwegian krone</option>
							<option value="PLN">🇵🇱 Polish zloty</option>
							<option value="GBP">🇬🇧 Pound sterling</option>
							<option value="RON">🇷🇴 Romanian leu</option>
							<option value="RUB">🇷🇺 Russian rouble</option>
							<option value="KRW">🇰🇷 South Korean won</option>
							<option value="MXN">🇲🇽 Mexican peso</option>
							<option value="MYR">🇲🇾 Malaysian ringgit</option>
							<option value="NZD">🇳🇿 New Zealand dollar</option>
							<option value="PHP">🇵🇭 Philippine peso</option>
							<option value="SGD">🇸🇬 Singapore dollar</option>
							<option value="THB">🇹🇭 Thai baht</option>
							<option value="ZAR">🇿🇦 South African rand</option>
							<option value="SEK">🇸🇪 Swedish krona</option>
							<option value="CHF">🇨🇭 Swiss franc</option>
							<option value="TRY">🇹🇷 Turkish lira</option>
						</Select>
						<Button type="button" onClick={() => swap()}>🔃</Button>
					</SelectAddon>
				</Label>
				<Label>
        To
					<Select required {...select('to')}>
						<option value="">Select</option>
						<option value="AUD">🇦🇺 Australian dollar</option>
						<option value="BRL">🇧🇷 Brazilian real</option>
						<option value="BGN">🇧🇬 Bulgarian lev</option>
						<option value="CAD">🇨🇦 Canadian dollar</option>
						<option value="CNY">🇨🇳 Chinese yuan</option>
						<option value="HRK">🇭🇷 Croatian kuna</option>
						<option value="CZK">🇨🇿 Czech koruna</option>
						<option value="DKK">🇩🇰 Danish krone</option>
						<option value="EUR">🇪🇺 Euro</option>
						<option value="USD">🇺🇸 US dollar</option>
						<option value="HKD">🇭🇰 Hong Kong dollar</option>
						<option value="HUF">🇭🇺 Hungarian forint</option>
						<option value="ISK">🇮🇸 Icelandic krona</option>
						<option value="INR">🇮🇳 Indian rupee</option>
						<option value="IDR">🇮🇩 Indonesian rupiah</option>
						<option value="ILS">🇮🇱 Israeli shekel</option>
						<option value="JPY">🇯🇵 Japanese yen</option>
						<option value="NOK">🇳🇴 Norwegian krone</option>
						<option value="PLN">🇵🇱 Polish zloty</option>
						<option value="GBP">🇬🇧 Pound sterling</option>
						<option value="RON">🇷🇴 Romanian leu</option>
						<option value="RUB">🇷🇺 Russian rouble</option>
						<option value="KRW">🇰🇷 South Korean won</option>
						<option value="MXN">🇲🇽 Mexican peso</option>
						<option value="MYR">🇲🇾 Malaysian ringgit</option>
						<option value="NZD">🇳🇿 New Zealand dollar</option>
						<option value="PHP">🇵🇭 Philippine peso</option>
						<option value="SGD">🇸🇬 Singapore dollar</option>
						<option value="THB">🇹🇭 Thai baht</option>
						<option value="ZAR">🇿🇦 South African rand</option>
						<option value="SEK">🇸🇪 Swedish krona</option>
						<option value="CHF">🇨🇭 Swiss franc</option>
						<option value="TRY">🇹🇷 Turkish lira</option>
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
