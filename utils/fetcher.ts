'use strict';

import fetch from 'isomorphic-unfetch';

interface Rates {
	[name: string]: number;
}

export interface ResponseObject {
	base: string;
	rates: Rates;
}

export const fetcher = async (): Promise<ResponseObject> => {
	const request = await fetch('https://api.exchangeratesapi.io/latest');
	const response = await request.json();

	return response;
};
