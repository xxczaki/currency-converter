import {OptionTypeBase, ClassNamesState} from 'react-select';

export const options = [
	{
		label: 'Majors',
		options: [
			{value: 'USD', label: 'US Dollar (USD)'},
			{value: 'GBP', label: 'UK Pound (GBP)'},
			{value: 'EUR', label: 'Euro (EUR)'},
			{value: 'AUD', label: 'Australian Dollar (AUD)'},
			{value: 'CAD', label: 'Canadian Dollar (CAD)'},
			{value: 'CNY', label: 'Chinese Yuan Renminbi (CNY)'},
			{value: 'JPY', label: 'Japanese Yen (JPY)'},
			{value: 'CHF', label: 'Swiss Franc (CHF)'}
		]
	},
	{
		label: 'Europe',
		options: [
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
		]
	},
	{
		label: 'Americas',
		options: [
			{value: 'BRL', label: 'Brazilian Real (BRL)'},
			{value: 'CAD', label: 'Canadian Dollar (CAD)'},
			{value: 'MXN', label: 'Mexican New Peso (MXN)'},
			{value: 'USD', label: 'US Dollar (USD)'}
		]
	},
	{
		label: 'Africa',
		options: [
			{value: 'ZAR', label: 'South African Rand (ZAR)'}
		]
	},
	{
		label: 'Asia & Oceania',
		options: [
			{value: 'AUD', label: 'Australian Dollar (AUD)'},
			{value: 'CNY', label: 'Chinese Yuan Renminbi (CNY)'},
			{value: 'HKD', label: 'Hong Kong Dollar (HKD)'},
			{value: 'INR', label: 'Indian Rupee (INR)'},
			{value: 'IDR', label: 'Indonesian Rupiah (IDR)'},
			{value: 'ILS', label: 'Israeli Shekel (ILS)'},
			{value: 'JPY', label: 'Japanese Yen (JPY)'},
			{value: 'MYR', label: 'Malaysian Ringgit (MYR)'},
			{value: 'NZD', label: 'New Zealand Dollar (NZD)'},
			{value: 'PHP', label: 'Philippine Peso (PHP)'},
			{value: 'SGD', label: 'Singapore Dollar (SGD)'},
			{value: 'KRW', label: 'South Korean Won (KRW)'},
			{value: 'THB', label: 'Thai Baht (THB)'}
		]
	}
];

export const customStyles = {
	control: (base: Readonly<OptionTypeBase>, state: ClassNamesState) => ({
		...base,
		background: '#272d38',
		borderColor: state?.isFocused ? '#3182ce' : 'rgba(255,255,255,0.04)',
		'&:hover': {
			borderColor: 'rgba(255,255,255,0.08)'
		},
		marginBottom: '1em',
		height: '40px'
	}),
	menu: (base: Readonly<OptionTypeBase>) => ({
		...base,
		background: '#272d38'
	}),
	input: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'white'
	}),
	singleValue: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'white'
	}),
	option: (base: Readonly<OptionTypeBase>) => ({
		...base,
		background: '#272d38',
		'&:hover': {
			background: '#353d4c'
		}
	}),
	placeholder: (base: Readonly<OptionTypeBase>) => ({
		...base,
		color: 'inherit'
	})
};
