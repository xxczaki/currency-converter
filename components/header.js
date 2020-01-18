import styled from 'styled-components';

const Header = styled.header`
	font-family: 'Playfair Display', serif;
	font-size: 1.2em;
	letter-spacing: 1.2px;

	@media (min-width: 320px) and (max-width: 480px) {
		font-size: 0.9em;
	}
`;

export default Header;
