import styled from 'styled-components';

const Swap = styled.button`
    border: none;
    border-radius: 3px;
    width: 40px;
    padding: 10px;
    margin-left: 5px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    background-color: #474747;
    outline: none;
    user-select: none;
    background-position: center;
    transition: background 0.8s;

    &:hover {
        background: #616161 radial-gradient(circle, transparent 1%, #616161 1%) center/15000%;
    }

    &:active {
        background-color: #424242;
        background-size: 100%;
        transition: background 0s;
    }
`;

export default Swap;
