import React from 'react';
import styled from 'styled-components';
import {FastField} from 'formik';

const StyledTo = styled(FastField)`
    cursor: pointer;
    color: #fff;
    background-color: #474747;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 235px;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: none;
    appearance: none;
    user-select: none;
    transition: background 0.8s;

    &:hover {
        background: #616161;
    }

    &:focus {
        box-shadow: 0 0 0 2px #0096bfab;
        transition: all 0.2s ease;
    }
`;

const To = () => (
	<label>
        To
		<br/>
		<StyledTo name="to" component="select" placeholder="To" required>
			<option value="" label="Select"/>
			<option value="EUR">🇪🇺 Euro</option>
			<option value="USD">🇺🇸 US dollar</option>
			<option value="JPY">🇯🇵 Japanese yen</option>
			<option value="BGN">🇧🇬 Bulgarian lev</option>
			<option value="CZK">🇨🇿 Czech koruna</option>
			<option value="DKK">🇩🇰 Danish krone</option>
			<option value="GBP">🇬🇧 Pound sterling</option>
			<option value="HUF">🇭🇺 Hungarian forint</option>
			<option value="PLN">🇵🇱 Polish zloty</option>
			<option value="RON">🇷🇴 Romanian leu</option>
			<option value="SEK">🇸🇪 Swedish krona</option>
			<option value="CHF">🇨🇭 Swiss franc</option>
			<option value="ISK">🇮🇸 Icelandic krona</option>
			<option value="NOK">🇳🇴 Norwegian krone</option>
			<option value="HRK">🇭🇷 Croatian kuna</option>
			<option value="RUB">🇷🇺 Russian rouble</option>
			<option value="TRY">🇹🇷 Turkish lira</option>
			<option value="AUD">🇦🇺 Australian dollar</option>
			<option value="BRL">🇧🇷 Brazilian real</option>
			<option value="CAD">🇨🇦 Canadian dollar</option>
			<option value="CNY">🇨🇳 Chinese yuan</option>
			<option value="HKD">🇭🇰 Hong Kong dollar</option>
			<option value="IDR">🇮🇩 Indonesian rupiah</option>
			<option value="ILS">🇮🇱 Israeli shekel</option>
			<option value="INR">🇮🇳 Indian rupee</option>
			<option value="KRW">🇰🇷 South Korean won</option>
			<option value="MXN">🇲🇽 Mexican peso</option>
			<option value="MYR">🇲🇾 Malaysian ringgit</option>
			<option value="NZD">🇳🇿 New Zealand dollar</option>
			<option value="PHP">🇵🇭 Philippine peso</option>
			<option value="SGD">🇸🇬 Singapore dollar</option>
			<option value="THB">🇹🇭 Thai baht</option>
			<option value="ZAR">🇿🇦 South African rand</option>
		</StyledTo>
	</label>
);

export default To;
