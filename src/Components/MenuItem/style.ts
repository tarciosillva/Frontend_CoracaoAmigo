import styled from "styled-components";

export const MenuItemElement = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;

    p{
        margin: 0;
    }

    .link{
        color: var(--textSecondaryColor);
        text-decoration: none;
    }
    
    img{
        width: 1.3rem;
        margin-right: 0.85rem;
    }

    p{
        font-size: 0.9rem;
        font-weight: 500;
    }

    :hover{
        background-color: #c5ffc7;
        img{
        width: 1.4rem;
        margin-right: 0.85rem;
        p{
        font-size: 1rem;
        font-weight: 500;
    }
    }

    }
`