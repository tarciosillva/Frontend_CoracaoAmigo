import styled from "styled-components";

export const ContainerHeader = styled.div`
    h4{
        font-size: 1.5rem;
    }
`

export const TimeLineContainer = styled.div`
    border-left: 0.25rem solid var(--primaryGreen);
    width: 100%;
    height: 90%;
    margin-top: 1.5rem;
    overflow-y: auto;
    overflow-x:hidden;
`

export const HistoricDecription = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`

export const ItemDesciption = styled.div`
    display: grid;
    grid-gap: 1rem;
    p{
        font-size: 0.85rem;
        margin-bottom: 0;
    }
    margin-left: 1rem;
    padding: 0.5rem;
`

export const DivisorTimeLine = styled.div`
    width: 100%;
    display: grid;
    margin-left: 9rem;
    p{
        margin: 0;
        height: 0.75rem;
    }
`

export const TimeIconContent = styled.div`
    background-color: var(--primaryGreen);
    border-radius: 50%;
    padding: 0.2rem;
    width: 1.75rem;
    height: 1.75rem;
    margin-left: 0.25rem;


    display: flex;
    justify-content: center;

    img{
        width: 2rem;
    }
`