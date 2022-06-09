import styled from "styled-components";

export const ContainerFamily = styled.div`
    height: 80vh;
    overflow-y: scroll;
`

export const ContainerTopActions = styled.div`
   display: flex;
   justify-content: space-between;
   padding-right: 3.5rem;
`

export const Section = styled.section`
    margin-top: 1rem;
`

export const SectionElement = styled.div`
    padding: 0.5rem;
    display: flex;
    .contentMargin{
        margin-right: 10rem;
    }
`

export const Hr=styled.hr`
    height: 1px;
    width: 80%;
    margin-bottom: 0.5rem;
`

export const SectionName = styled.h3`
    width: 95%;
    border-radius: 0.3rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    background-color: #2ed47a;
    padding: 0.5rem;
    font-size: 0.9rem;
    color: var(--whiteColor);
`

export const ItemType = styled.p`
    font-weight: 400;
    font-size: 0.9rem;
`

export const ItemName = styled.p`
    color: var(--fontSecondaryColor);
    img{
        width: 18rem;
        border-radius: 0.3rem;
    }
`

export const ContentItem = styled.div`
    margin-bottom: 0.5rem;
`

export const ButtonHistoric=styled.button`
    border: none;
    border-radius: 0.3rem;
    padding: 0.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    background-color: #567ebb;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    
    .link{
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
    }
    img{
        width: 1.5rem;
        margin-right: 0.5rem;
    }
`



removeEventListener