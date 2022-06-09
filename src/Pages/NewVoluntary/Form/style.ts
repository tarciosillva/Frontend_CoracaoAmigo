import styled from "styled-components";

export const FormElement = styled.form`
    .adressCity{
        input{
            background-color: #E5E5E5;
            border: none;
        }
    }

    input{
        width: 20rem;
        border-radius: 0.3rem;
        border: 0.1rem solid #E5E5E5;
        padding: 0.45rem;
        margin-top: 0.5rem;
        font-size: 0.9rem;
    }

    h4{
        font-size: 0.9rem;
    }
`

export const ItensInline = styled.div`
    width: min-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    input{
        background-color: #E5E5E5;
        border: none;
    }
    
    input[type='number']{
        width: 5rem;
    }
`
