import styled from "styled-components";

export const DeliveryContent=styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 0.3rem;
    background-color: aliceblue;
    margin-bottom: 0.5rem;

    cursor: pointer;
`

export const TextArea=styled.textarea`
    resize: horizontal;
    width: 35rem;
    height: 7.5rem;
    padding: 0.5rem;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 0.8rem;
`

export const SectionDeliveryContent=styled.div`
    border-left: 0.2rem solid var(--primaryGreen);
    padding: 0.5rem;
    margin-bottom: 1rem;
`

export const DeliveryDescription=styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
    grid-gap: 1.5rem;
    margin-left: 1rem;
    font-size: 0.9rem;
    cursor: pointer;
`

export const VoluntaryDescription=styled.div`
    width: 100%;
    text-align: center;
    margin-left: 1rem;
    font-size: 0.9rem;
    cursor: pointer;
`