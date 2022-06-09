import styled from "styled-components";

export const Container = styled.div`
    padding: 0.5rem;
   
    background-color: #fff;
    margin: 1rem;
    height: 95vh;
`

export const ContentTable = styled.div`
     overflow-x: auto;
     height: 88%;
    ::-webkit-scrollbar {
        height: 0.65rem;
        background-color: #E5E5E5;
        border-radius: 0.3rem;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        border-radius: 0.3rem;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background-color: #7b8a84;
        border-radius: 0.3rem;
        height: 1rem;
    }
`

export const Table = styled.table`
    width: 50vw;
    border-collapse: collapse;
    border-spacing: 0;

    .counter{
        width: 1rem;
        padding: 1rem;
        background-color: var(--primaryGreen);
    }
    
    th{
        width: 1rem;
        font-weight: 400;
        font-size: 0.8rem;
        padding: 0.25rem;
        text-align: left;
        color: var(--fontSecondaryColor);
        border-bottom: 0.1rem solid #e6e6e6a6;
        
    }

    thead{
        th{
            padding: 0.1rem;
            textarea{
                resize: horizontal;
                height: 2rem;
                border: none;
                width: 8rem;
                padding: 0.5rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow-x: hidden;
                overflow-y: hidden;
                font-weight: 500;
                font-size: 0.8rem;
                background-color: var(--primaryGreen);
                color: #fff;
            }

            #conter{
                resize: none;
                width: 1.5rem;
            }
        }
    }
    
    tbody{
        background-color: var(--whiteColor);
        tr{
            cursor: pointer;
        }
        th{
            color:#777777;
        }
    }
`

export const Title = styled.div`
    p{
        font-weight: 400;
        color:#777777;
        font-size: 1.25rem;
    }
    
    
    display: flex;
    justify-content: space-between;
`

export const TotalRegisters = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    margin-bottom: 1rem;
    color:#777777;
`

export const BackContent=styled.div`
    width: 2rem;
    height: 2rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:  #E5E5E5;
    margin-right: 1rem;
    
    :hover{
        transition: width 1s;
        background-color: #d9ddcd;
    }

    cursor: pointer;

    img{
        width: 1rem;
        
    }
`