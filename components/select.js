import styled from 'styled-components';

const Select = styled.select`
    cursor: pointer;
    color: #fff;
    background-color: #424242;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 18em;
	height: 3em;
	font-family: 'Space Mono', monospace;
    padding: 10px;
    border: none;
    border-radius: 4px;
    outline: none;
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

export default Select;
