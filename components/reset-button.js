import styled from 'styled-components';

const Reset = styled.button`
    border: none;
    border-radius: 3px;
    width: 50px;
    padding: 12px 18px;
    margin-left: 35px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background-color: #f44336;
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #e53935 radial-gradient(circle, transparent 1%, #e53935 1%) center/15000%;
    }

    &:active {
        background-color: #d32f2f;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Reset;
