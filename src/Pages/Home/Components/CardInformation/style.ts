import styled from "styled-components";

interface cardContentProps{
    backgroundColor:string
}

export const CardContent=styled.div<cardContentProps>`
    width: 100%;
    height: 12rem;
    background-color: ${props=>props.backgroundColor};
    border-radius: 0.3rem;
    padding: 0.5rem;
    box-shadow: 3px 3px #dfdfdf, 0em 1px 0.4em #8f8f8f;
    display: grid;
    align-items: center;

    div{
        display: flex;
        align-items: baseline;
        justify-content: center;
    }
`

export const CardTitle=styled.p`
    font-size: 1.1rem;
    margin-left: 1rem;
    color: #fff;
`

export const NumberElement=styled.h1`
    font-size: 5rem;
    color: #fff;
`

export const TextTotal=styled.p`
    font-size: 1.1rem;
    margin-left: 1rem;
    color: #fff;
`
