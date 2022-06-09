import styled from "styled-components";

export const PageContanier =styled.div`
    display: flex;
    .centered {
        display: flex;
        align-items: center;
    }
`

export const TitlePage=styled.div`
    img{
        width: 1.25rem;
        margin-left: 0.5rem;
    }
`

export const ItemForm = styled.div`
    display: grid;
    margin: 1rem 0 0.5rem 0;

    label{
        font-size: 0.8rem;
    }
`

export const Table = styled.table`
    width: 97%;
    border-collapse: collapse; 
    border-spacing: 0;
    
    th{
        font-weight: 400;
        font-size: 0.8rem;
        padding: 0.5rem;
        text-align: left;
        color: var(--fontSecondaryColor);
        border-bottom: 0.1rem solid #e6e6e6a6;

        img{
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 2rem;
        }
    }

    thead{
        .image, .details{
            width: 2.5rem;
        }
        th{
            font-weight: 500;
        }
    }
    
    tbody{
        background-color: var(--whiteColor);
        tr{
            cursor: pointer;
        }
        .image{
            width: 2.5rem;
        }
        th{
            color:#777777;
        }
    }
`


export const ContentPage=styled.div`
    width: 80%;
    height: auto;
    background-color: var(--whiteColor);
    margin: 1rem;
    padding: 2rem;
`

export const ActionSelect = styled.div`
    display: flex;
    align-items: center;
    margin-right: 2.5rem;
    font-weight: 500;
    margin-top: 1rem;
    select{
        margin-left: 0.5rem;
        padding: 0.5rem;
        border-radius: 0.3rem;
        border: 1px solid #E5E5E5;
        cursor: pointer;
    }
`

export const FilterContent=styled.div`
    width: 30rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    border: 2px solid var(--borderInputContainerColor);
    border-radius: 0.3rem;
    input{
        width: 100%;
        border: none;
        padding: 0.5rem;
        font-weight: 500;
    }
    img{
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        width: 1rem;
    }
`


export const Button = styled.button`
    width: 10rem;
    border: none;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-radius: 0.3rem;
    color: var(--whiteColor);
    font-weight: 500;
    background-color: green;

    P{
        margin: 0;
        white-space: nowrap;
    }

    cursor: pointer;
`