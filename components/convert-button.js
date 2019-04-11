import styled from 'styled-components';

const Button = styled.button`
    border: none;
    border-radius: 3px;
    width: 150px;
    padding: 12px 18px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background-color: #558B2F;
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #33691E radial-gradient(circle, transparent 1%, #33691E 1%) center/15000%;
    }

    &:active {
        background-color: #1B5E20;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Button;
