'use strict';

export const fetcher = async () => {
	const request = await fetch('https://api.exchangeratesapi.io/latest');
	const response = await request.json();

	return response;
};
