import React, {useState} from 'react';
import {Formik, Form} from 'formik';
import {set, get} from 'idb-keyval';
import money from 'money';

import Input from './input';
import From from './from';
import To from './to';
import Button from './convert-button';
import Reset from './reset-button';

const Converter = () => {
	const [result, setResult] = useState('');

	const resetState = () => setResult('');

	return (
		<div>
			<Formik
				initialValues={{
					amount: '',
					from: '',
					to: ''
				}}
				onSubmit={(values, {setSubmitting}) => {
					setSubmitting(false);

					get('exchangeRates').then(async val => {
						if (val === undefined) {
							const request = await fetch(`https://api.exchangeratesapi.io/latest?base=${values.from}`);
							const response = await request.json();
							set('exchangeRates', response);

							money.base = response.base;
							money.rates = response.rates;

							const result = money.convert(values.amount, {from: values.from, to: values.to}).toFixed(3);

							setResult(`${values.amount} ${values.from} => ${result} ${values.to}`);
						} else {
							money.base = val.base;
							money.rates = val.rates;

							const result = money.convert(values.amount, {from: values.from, to: values.to}).toFixed(3);

							setResult(`${values.amount} ${values.from} => ${result} ${values.to}`);
						}
					});
				}}
			>
				{({isSubmitting, resetForm}) => (
					<Form>
						<Input/>
						<br/>
						<From/>
						<br/>
						<To/>
						<br/>
						<Button type="submit" disabled={isSubmitting}>
							Convert
						</Button>
						<Reset type="reset" onClick={() => {
							resetForm();
							resetState();
						}}
						>X
						</Reset>
						<br/>
						<br/>
						{result}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Converter;
