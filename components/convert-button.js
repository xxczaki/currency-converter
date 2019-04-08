import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 3px;
    width: 150px;
    padding: 12px 18px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background-color: #689F38;
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #558B2F radial-gradient(circle, transparent 1%, #558B2F 1%) center/15000%;
    }

    &:active {
        background-color: #33691E;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Button;
