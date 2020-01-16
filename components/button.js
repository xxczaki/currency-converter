import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 4px;
    width: ${props => props.primary || props.reset ? '15em' : '2.5em'};
	height: ${props => props.primary || props.reset ? 'auto' : '2.2em'};
	padding: ${props => props.primary || props.reset ? '12px 18px' : '5px'};
	margin-top: ${props => props.primary || props.reset ? 'auto' : '0.6em'};
	margin-right: ${props => props.primary ? '10px' : 'auto'};
	margin-left: ${props => props.primary || props.reset ? 0 : '5px'};
	margin-bottom: ${props => props.primary ? '10px' : 'auto'};
    font-size: 16px;
    cursor: pointer;
    color: #fff;
	background-color: ${props => props.primary ? '#33691e' : (props.reset ? '#c62828' : '#474747')};
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: ${props => props.primary ? '#1b5e20' : (props.reset ? '#b71c1c' : '#616161')} radial-gradient(circle, transparent 1%, ${props => props.primary ? '#1b5e20' : (props.reset ? '#b71c1c' : '#616161')} 1%) center/15000%;
    }

    &:active {
        background-color: #0C290e;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Button;
