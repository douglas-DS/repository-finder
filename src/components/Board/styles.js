import styled from 'styled-components';

export const Container = styled.div`
    height: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    background-color: #FFF;
    margin: 0 30% 0 30%;
    border-radius: 10px;

    input {
        height: 30px;
        width: (10px * 3vh);
        margin-bottom: 30px;
        border-radius: 4px;
        border-style: groove;

        font-size: 16px;
    }

    button {
        background-color: #7159f9;
        border-style: none;
        border-radius: 5px;
        padding-bottom: 5px;
    }

`;
